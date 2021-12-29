import styled, { css } from "styled-components";

export const ContainerInfo = styled.address`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
    font-weight: 400;

    > * {
      padding: 5px;
      color: ${theme.colors.gray};
    }
  `}
`;
