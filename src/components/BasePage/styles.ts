import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;