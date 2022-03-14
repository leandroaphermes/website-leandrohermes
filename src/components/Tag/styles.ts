import styled, { css, DefaultTheme } from "styled-components";

export type TagSizeProp = keyof DefaultTheme["font"]["sizes"];
export type TagSizePaddingProp = keyof DefaultTheme["spacings"];

export type WrapperProp = {
  size?: TagSizeProp | TagSizePaddingProp;
  color?: string;
};

export const Wrapper = styled.span<WrapperProp>`
  display: inline-block;
  ${({ color, size, theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};
    background-color: ${color ? color : "#CCC"};
    color: ${theme.colors.secondary};
    padding: calc(${size ? theme.spacings[size] : theme.spacings.xsmall} / 6)
      calc(${size ? theme.spacings[size] : theme.spacings.xsmall} / 2);
    border-radius: ${theme.border.radius};
  `}
`;
