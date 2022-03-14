import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  transition: background-color 0.2s;
  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    & > * {
      margin-bottom: calc(${theme.spacings.xxsmall} / 2);
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`;
