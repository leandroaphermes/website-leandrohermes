import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  overflow: auto;
  flex: 1;
`;

export type ContentProps = {
  full?: boolean;
};

export const Content = styled.div<ContentProps>`
  ${({ theme, full }) => css`
    padding: ${theme.spacings.medium};
    ${!full &&
    css`
      max-width: 1400px;
      margin: 0px auto;
    `}
  `}
`;
