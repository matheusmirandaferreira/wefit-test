import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { useState, useCallback, useEffect } from "react";

import { Button } from "../../components/Button";
import { CountInput } from "../../components/CountInput";
import { PageWrapper } from "../../components/PageWrapper";
import { DefaultMessage } from "../../components/DefaultMessage";

import { paths } from "../../routes";
import EmptyCartImg from "../../assets/empty-cart.png";

import { MovieProps } from "../../types/movie";
import { getMovies } from "../../services/movies";
import { useMoviesCount } from "../../hooks/movies";

import * as S from "./styles";

export function Cart() {
  const theme = useTheme();
  const { selected, removeItem } = useMoviesCount();

  const [movies, setMovies] = useState<MovieProps[]>([]);

  const moviesSelected = movies
    .filter((item) =>
      selected.some((select) => select.id === item.id && select.count > 0)
    )
    .map((item) => ({
      ...item,
      count: selected.find((select) => select.id === item.id)?.count || 0,
    }));

  const loadMovies = useCallback(async () => {
    try {
      const response = await getMovies();

      setMovies(response);
    } catch (err) {}
  }, []);

  useEffect(() => {
    Promise.resolve(loadMovies());
  }, [loadMovies]);

  if (!moviesSelected.length) {
    return (
      <PageWrapper>
        <DefaultMessage
          img={EmptyCartImg}
          message="Parece que não há nada por aqui :("
        />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <S.ItemsWrapper className="box">
        <div className="cart-item">
          <div className="head">
            <span className="product-name">Produto</span>
            <span className="count-input">QTD</span>
            <span className="subtotal">Subtotal</span>
            <span className="del">#</span>
          </div>
          {moviesSelected.map((movie) => (
            <div key={movie.id} className="content">
              <span className="desktop-cart-item product-name">
                <img src={movie.image} />
                <div>
                  <span className="product-name">{movie.title}</span>
                  <span className="product-price">
                    R$ {movie.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </span>
              <img src={movie.image} className="mobile-only" />
              <span className="mobile-only product-name">{movie.title}</span>
              <span className="mobile-only product-price">
                R$ {movie.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="count-input">
                <CountInput id={movie.id} />
              </span>
              <span className="subtotal">
                <small className="mobile-only label">Subtotal</small>
                R$ {(movie.price * movie.count).toFixed(2).replace(".", ",")}
              </span>
              <span className="del-action" onClick={() => removeItem(movie.id)}>
                <Delete htmlColor={theme.primary} />
              </span>
            </div>
          ))}
        </div>
        <hr />
        <div className="footer">
          <Link to={paths.feedback}>
            <Button size="large">Finalizar pedido</Button>
          </Link>

          <div>
            <span className="label">Total</span>
            <span className="value">
              R${" "}
              {moviesSelected
                .map((item) => item.count * item.price)
                .reduce((partialSum, a) => partialSum + a, 0)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>
        </div>
      </S.ItemsWrapper>
    </PageWrapper>
  );
}
