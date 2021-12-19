import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: fit-content;
  border-radius: 10px;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    background-color: ${theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${theme.colors.primary};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 0px 2px 0px ${theme.colors.primary};
    padding: calc(${theme.spacings.xsmall} / 2) ${theme.spacings.xsmall};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`;
