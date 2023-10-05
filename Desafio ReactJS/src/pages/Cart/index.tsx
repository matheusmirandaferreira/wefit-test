import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PageWrapper } from '../../components/PageWrapper';

import { paths } from '../../routes';
import EmptyCartImg from '../../assets/empty-cart.png';

import * as S from './styles';

export function Cart() {
  const moviesSelected = [];

  if (!moviesSelected.length) {
    return (
      <PageWrapper>
        <S.EmptyContent className='box'>
          <h2>Parece que não há nada por aqui :(</h2>
          <img src={EmptyCartImg} alt='Carrinho vazio' />
          <Link to={paths.home}>
            <Button size='large' style={{ width: 180 }}>
              Voltar
            </Button>
          </Link>
        </S.EmptyContent>
      </PageWrapper>
    );
  }

  return <PageWrapper></PageWrapper>;
}
