import styled, { css, DefaultTheme } from "styled-components";

export type TitleSizeProp = keyof DefaultTheme["font"]["sizes"];

export const Wrapper = styled.h2<{ size?: TitleSizeProp }>`
  ${({ size, theme }) => css`
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
  `}
`;
