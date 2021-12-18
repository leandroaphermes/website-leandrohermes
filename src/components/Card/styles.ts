import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: fit-content;
  border-radius: 10px;

  ${({ theme }) => css`
    box-shadow: 0px 0px 9px 0px ${theme.colors.primary};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.xsmall} / 2) ${theme.spacings.xsmall};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};
  `}
`;
