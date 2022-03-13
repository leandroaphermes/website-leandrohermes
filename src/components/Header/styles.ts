import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28rem;
  ${({ theme }) => css`
    background: ${theme.colors.bodyBg};
    box-shadow: -4px -6px 12px 0px ${theme.colors.primary};
  `}
`;
