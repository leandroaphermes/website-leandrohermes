import React from "react";
import NavLink from "./NavLink";

import * as S from "./styles";

export default function Menu() {
  return (
    <S.Wrapper>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/projetos">Projetos</NavLink>
      <NavLink href="/sobre-mim">Sobre Mim</NavLink>
    </S.Wrapper>
  );
}
