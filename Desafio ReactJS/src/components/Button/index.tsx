import { Button as MUIButton, ButtonProps } from '@mui/material';

import * as S from './styles';

export function Button(props: ButtonProps) {
  return (
    <S.Container>
      <MUIButton fullWidth variant='contained' color='info' {...props} />
    </S.Container>
  );
}
