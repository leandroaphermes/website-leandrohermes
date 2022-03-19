import React from "react";

import Menu from "components/Menu";

import * as S from "./styles";

export type HeaderProps = {
  isCollapsed: boolean;
  onOpenMenu: (isCollapsed: boolean) => void;
  onCloseMenu: (isCollapsed: boolean) => void;
};

export default function Header({
  isCollapsed,
  onCloseMenu,
  onOpenMenu,
}: HeaderProps) {
  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      {isCollapsed && (
        <S.OpenMenu onClick={() => onOpenMenu(isCollapsed)}>Menu</S.OpenMenu>
      )}
      <S.CloseButtom onClick={() => onCloseMenu(isCollapsed)}>X</S.CloseButtom>
      <S.ContainerMenu>
        <Menu />
      </S.ContainerMenu>
    </S.Wrapper>
  );
}
