import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  overflow: auto;
  flex: 1;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  width: 100%;
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    max-width: 1400px;
  `}
`;
