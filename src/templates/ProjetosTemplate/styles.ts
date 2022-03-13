import styled, { css } from "styled-components";

export const GridWrapper = styled.article`
  display: grid;
  grid-auto-flow: dense;

  ${({ theme }) =>
    css`
      grid-template-columns: repeat(3, minmax(${theme.grid.container}, 1fr));
      grid-gap: ${theme.grid.gutter};
      margin-top: ${theme.spacings.xsmall};
    `};
`;

export const GridItem = styled.section`
  width: 100%;
  background-color: brown;

  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`;
