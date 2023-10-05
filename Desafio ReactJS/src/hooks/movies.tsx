import React, { createContext, useCallback, useContext, useState } from "react";

type SectedProps = {
  id: number;
  count: number;
};

type ContextProps = {
  /** Selected movies */
  selected: SectedProps[];

  /** Select, increment, or decrease the number of movies */
  handleSelect(id: number, action: "add" | "remove"): void;

  /** Removes an item from the cart entirely */
  removeItem(id: number): void;
};

const initialValues: ContextProps = {
  selected: [],
  handleSelect: () => {},
  removeItem: () => {},
};

const Context = createContext(initialValues);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selected, setSelected] = useState<SectedProps[]>([]);

  const handleSelect = useCallback(
    (id: number, action: "add" | "remove") => {
      let current = selected;

      const foundMovie = current.find((item) => item.id === id);

      if (foundMovie) {
        if (action === "add") {
          foundMovie.count = (foundMovie.count || 0) + 1;
          current = current.map((item) => (item.id === id ? foundMovie : item));
        }
        if (action === "remove") {
          if (foundMovie.count) foundMovie.count = (foundMovie.count || 0) - 1;
          else current = current.filter((item) => item.id !== id);
        }
      }

      if (!foundMovie && action === "add") current.push({ id, count: 1 });

      setSelected([...current]);
    },
    [selected]
  );

  const removeItem = useCallback(
    (id: number) => {
      const current = selected.filter((item) => item.id !== id);

      setSelected([...current]);
    },
    [selected]
  );

  return (
    <Context.Provider value={{ selected, handleSelect, removeItem }}>
      {children}
    </Context.Provider>
  );
};

export function useMoviesCount() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useMoviesCount must be used in Provider");
  }

  return context;
}
