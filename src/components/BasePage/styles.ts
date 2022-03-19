import styled, { css } from "styled-components";

export type WrapperProps = {
  isCollapsed: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  overflow: auto;
  flex: 1;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    max-width: 1400px;
    margin: 0px auto;
    height: 100%;
  `}
`;
