import React, { useState } from "react";

import Menu from "components/Menu";

import * as S from "./styles";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      <S.CloseButtom onClick={() => setIsCollapsed(!isCollapsed)}>
        X
      </S.CloseButtom>
      <Menu />
    </S.Wrapper>
  );
}
