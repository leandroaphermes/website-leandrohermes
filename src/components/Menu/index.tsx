import React from "react";
import NavLink, { NavLinkProps } from "./NavLink";

import * as S from "./styles";

export type MenuProps = Pick<NavLinkProps, "onClick">;

export default function Menu({ onClick }: MenuProps) {
  return (
    <S.Wrapper>
      <NavLink href="/" onClick={onClick}>
        Home
      </NavLink>
      <NavLink href="/projetos" onClick={onClick}>
        Projetos
      </NavLink>
      <NavLink href="/sobre-mim" onClick={onClick}>
        Sobre Mim
      </NavLink>
    </S.Wrapper>
  );
}
