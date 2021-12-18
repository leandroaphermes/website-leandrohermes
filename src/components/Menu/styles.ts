import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  font-size: 20px;

  ${({ theme }) => css`
    & > a {
      text-decoration: none;
      color: ${theme.colors.text};
    }

    & > a:hover {
      color: ${theme.colors.gray};
    }

    &:hover {
      color: ${theme.colors.gray};
    }
  `}
`;
