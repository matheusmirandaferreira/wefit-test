import { ShoppingBasket } from '@mui/icons-material';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <h2 className='title'>WeMovies</h2>
      <div className='cart-menu'>
        <div className='group'>
          <p className='description'>Meu carrinho</p>
          <div className='count'>0 itens</div>
        </div>
        <ShoppingBasket />
      </div>
    </S.Container>
  );
}
