import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export type MenuItemProps = {
  isActive: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  font-size: 20px;

  ${({ theme, isActive }) => css`
    & > a {
      text-decoration: none;
      color: ${isActive ? theme.colors.gray : theme.colors.text};
    }

    &:hover {
      color: ${theme.colors.gray};
    }
  `}
`;
