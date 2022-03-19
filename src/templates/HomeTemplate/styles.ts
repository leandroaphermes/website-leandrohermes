import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ContainerInfo = styled.address`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};

    > * {
      padding: 5px;
      color: ${theme.colors.gray};
    }
  `}
`;
