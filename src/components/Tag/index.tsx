import React from "react";

import * as S from "./styles";

export type TagProps = {
  children: React.ReactNode;
} & S.WrapperProp;

export default function Tag({ children, size, color }: TagProps) {
  return (
    <S.Wrapper size={size} color={color}>
      {children}
    </S.Wrapper>
  );
}
