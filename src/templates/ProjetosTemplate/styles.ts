import styled, { css } from "styled-components";

export const GridWrapper = styled.article`
  display: grid;

  ${({ theme }) =>
    css`
      grid-template-columns: repeat(2, minmax(${theme.grid.container}, 1fr));
      grid-gap: ${theme.grid.gutter};
      @media screen and (max-width: 1200px) {
        grid-template-columns: minmax(${theme.grid.container}, 1fr);
      }
    `};
`;

export const GridItem = styled.section`
  width: 100%;
`;
