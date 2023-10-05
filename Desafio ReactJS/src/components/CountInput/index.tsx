import { AddCircleOutline, DoNotDisturbOnOutlined } from "@mui/icons-material";
import * as S from "./styles";
import { useMoviesCount } from "../../hooks/movies";

type Props = {
  id: number;
};

export function CountInput({ id }: Props) {
  const { handleSelect, selected } = useMoviesCount();

  return (
    <S.Container>
      <a href="#" className="minus" onClick={() => handleSelect(id, "remove")}>
        <DoNotDisturbOnOutlined />
      </a>
      <input
        type="number"
        value={selected.find((item) => item.id === id)?.count || 0}
      />
      <a href="#" className="plus" onClick={() => handleSelect(id, "add")}>
        <AddCircleOutline />
      </a>
    </S.Container>
  );
}
