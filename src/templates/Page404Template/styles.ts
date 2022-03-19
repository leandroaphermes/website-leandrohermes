import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Description = styled.p`
  ${({ theme }) =>
    css`
      color: ${theme.colors.gray};
    `};
`;
