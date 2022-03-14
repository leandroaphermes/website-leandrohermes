import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.p`
  ${({ theme }) =>
    css`
      color: ${theme.colors.gray};
    `};
`;
