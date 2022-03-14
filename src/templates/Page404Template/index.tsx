import React, { ReactElement } from "react";

import Title from "components/Title";

import * as S from "./styles";

export default function Page404Template(): ReactElement {
  return (
    <S.Wrapper>
      <Title size="huge">404</Title>
      <S.Description>Pagina não encontrada</S.Description>
    </S.Wrapper>
  );
}
