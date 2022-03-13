import React from "react";

import * as S from "./styles";

export type TitleProps = {
  size?: S.TitleSizeProp;
  children: React.ReactNode;
};

export default function Title({ children, size }: TitleProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
}
