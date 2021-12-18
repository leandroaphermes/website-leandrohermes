import React from "react";

import * as S from "./styles";

export type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card(props: CardProps) {
  return (
    <S.Wrapper>
      <S.Header>{props.title}</S.Header>
      <S.Body>{props.children}</S.Body>
    </S.Wrapper>
  );
}
