import React, { ReactElement } from "react";
import BasePage from "components/BasePage";

import Title from "components/Title";

import * as S from "./styles";

interface Props {}

export default function HomeTemplate({}: Props): ReactElement {
  // fetch api github: https://api.github.com/users/leandroaphermes/repos

  return (
    <BasePage>
      <Title size="xxlarge">Projetos</Title>
      <S.GridWrapper>
        <S.GridItem>
          <Title size="medium">4awdawdawd</Title>
          <p>fgagawgawgaw</p>
        </S.GridItem>
        <S.GridItem>
          <Title size="medium">4awdawdawd</Title>
          <p>fgagawgawgaw</p>
        </S.GridItem>
        <S.GridItem>
          <Title size="medium">4awdawdawd</Title>
          <p>fgagawgawgaw</p>
        </S.GridItem>
        <S.GridItem>
          <Title size="medium">4awdawdawd</Title>
          <p>fgagawgawgaw</p>
        </S.GridItem>
      </S.GridWrapper>
    </BasePage>
  );
}
