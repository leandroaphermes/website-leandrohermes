import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  min-width: 28rem;
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    box-shadow: -4px -6px 12px 0px ${theme.colors.secondary};
  `}
`;

export const ContainerPerfio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const WrapperMenu = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;