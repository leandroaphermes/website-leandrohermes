import styled, { css } from "styled-components";

export const OpenMenu = styled.button`
  border: none;
  background-color: transparent;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    padding: ${theme.spacings.small};
  `}
`;

export const CloseButtom = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  right: 0px;
  display: none;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    padding: ${theme.spacings.medium};
  `}
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export type WrapperProps = {
  isCollapsed: boolean;
};

export const Wrapper = styled.header<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28rem;
  ${({ theme }) => css`
    background: ${theme.colors.bodyBg};
    box-shadow: -4px -6px 12px 0px ${theme.colors.primary};
  `}
  ${OpenMenu} {
    display: none;
  }
  @media screen and (max-width: 786px) {
    height: 80px;
    width: 100%;
    ${ContainerMenu} {
      display: none;
    }
    ${OpenMenu} {
      display: block;
    }
  }
  @media screen and (max-width: 786px) {
    ${({ theme, isCollapsed }) => css`
      z-index: ${theme.layers.menu};
      ${!isCollapsed
        ? css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;

            ${CloseButtom} {
              display: block;
            }
            ${ContainerMenu} {
              display: flex;
            }
          `
        : ""}
    `}
  }
`;
