import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { PageWrapper } from "../../components/PageWrapper";

import { paths } from "../../routes";

import * as S from "./styles";

type Props = {
  message: string;
  img: string;
};

export function DefaultMessage({ img, message }: Props) {
  return (
    <PageWrapper>
      <S.Content className="box">
        <h2>{message}</h2>
        <img src={img} />
        <Link to={paths.home}>
          <Button size="large" style={{ width: 180 }}>
            Voltar
          </Button>
        </Link>
      </S.Content>
    </PageWrapper>
  );
}
