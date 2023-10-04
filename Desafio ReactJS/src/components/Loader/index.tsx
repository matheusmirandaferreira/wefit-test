import LoaderImg from '../../assets/loader.png';

import * as S from './styles';

export function Loader() {
  return (
    <S.Container>
      <img src={LoaderImg} alt='Loader' />
    </S.Container>
  );
}
