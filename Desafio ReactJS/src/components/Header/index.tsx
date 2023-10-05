import { ShoppingBasket } from '@mui/icons-material';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';

export function Header() {
  return (
    <S.Container>
      <Link to={paths.home}>
        <h2 className='title'>WeMovies</h2>
      </Link>
      <Link to={paths.cart}>
        <div className='cart-menu'>
          <div className='group'>
            <p className='description'>Meu carrinho</p>
            <div className='count'>0 itens</div>
          </div>
          <ShoppingBasket />
        </div>
      </Link>
    </S.Container>
  );
}
