import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Button } from '../../components/Button';

import { MovieProps } from '../../types/movie';

import * as S from './styles';

export function MovieCard(props: MovieProps) {
  const { image, price, title } = props;

  return (
    <S.Container className='box'>
      <div className='content'>
        <img src={image} alt={title} />
        <span className='movie-name'>{title}</span>
        <p className='movie-price'>R$ {price.toFixed(2).replace('.', ',')}</p>
      </div>
      <Button
        size='large'
        startIcon={
          <>
            <AddShoppingCartOutlined fontSize='small' />
            <span className='count'>0</span>
          </>
        }
      >
        Adicionar ao carrinho
      </Button>
    </S.Container>
  );
}
