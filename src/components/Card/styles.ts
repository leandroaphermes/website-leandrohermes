import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: fit-content;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    border-bottom: 1px solid ${theme.colors.secondary};
    padding: calc(${theme.spacings.xsmall} / 2) 0px;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: ${theme.spacings.xsmall} 0px;
  `}
`;
