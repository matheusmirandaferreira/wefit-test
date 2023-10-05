import { Link } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";

import { paths } from "../../routes";
import { useMoviesCount } from "../../hooks/movies";

import * as S from "./styles";

export function Header() {
  const { selected } = useMoviesCount();

  const total = selected
    .map((item) => item.count)
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <S.Container>
      <Link to={paths.home}>
        <h2 className="title">WeMovies</h2>
      </Link>
      <Link to={paths.cart}>
        <div className="cart-menu">
          <div className="group">
            <p className="description">Meu carrinho</p>
            <div className="count">{total} itens</div>
          </div>
          <ShoppingBasket />
        </div>
      </Link>
    </S.Container>
  );
}
