import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Asap";
    src: url("/fonts/asap/Asap-Regular.ttf") format("truetype");
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family};
    }

    body,
    #__next {
      height: 100vh;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.primary};
    }
  `}

`;

export default GlobalStyles;
