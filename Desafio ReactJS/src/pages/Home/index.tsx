import { useCallback, useEffect, useState } from "react";

import { Loader } from "../../components/Loader";
import { MovieCard } from "../../components/MovieCard";
import { PageWrapper } from "../../components/PageWrapper";

import { MovieProps } from "../../types/movie";
import { getMovies } from "../../services/movies";

import * as S from "./styles";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");
  const [data, setData] = useState<MovieProps[]>([]);

  const loadMovies = useCallback(async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await getMovies();

      setData(response);
    } catch (err) {
      setError("Ocorreu um erro ao carregar seus dados.");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    Promise.resolve(loadMovies());
  }, [loadMovies]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <PageWrapper>
      <S.CardsWrapper>
        {data.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </S.CardsWrapper>
    </PageWrapper>
  );
}
