import { AddShoppingCartOutlined } from "@mui/icons-material";

import { Button } from "../../components/Button";

import { MovieProps } from "../../types/movie";
import { useMoviesCount } from "../../hooks/movies";

import * as S from "./styles";

export function MovieCard(props: MovieProps) {
  const { image, price, title, id } = props;

  const { selected, handleSelect } = useMoviesCount();

  const count = selected.find((item) => item.id === id)?.count || 0;

  return (
    <S.Container className="box">
      <div className="content">
        <img src={image} alt={title} />
        <span className="movie-name">{title}</span>
        <p className="movie-price">R$ {price.toFixed(2).replace(".", ",")}</p>
      </div>
      <Button
        size="large"
        color={count >= 1 ? "success" : undefined}
        startIcon={
          <>
            <AddShoppingCartOutlined fontSize="small" />
            <span className="count">{count}</span>
          </>
        }
        onClick={() => handleSelect(id, "add")}
      >
        {count >= 1 ? "Item adicionado" : "Adicionar ao carrinho"}
      </Button>
    </S.Container>
  );
}
