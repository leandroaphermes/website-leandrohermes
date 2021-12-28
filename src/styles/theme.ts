const base = {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family: "Asap",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
};

export type ThemeTypeColor = typeof ligth; // This is the type definition for my theme object.

export const ligth = {
  colors: {
    primary: "#15F",
    secondary: "#4AF",
    text: "#333",
    gray: "#363537",
    bodyBg: "linear-gradient(#EEE, #E2E2E2)",
  },
};
export const dark: ThemeTypeColor = {
  colors: {
    primary: "#0a0c0a",
    secondary: "#2a2c2a",
    text: "#DDD",
    gray: "#999",
    bodyBg: "linear-gradient(137deg,#2c2c2c,#0a0c0a)",
  },
};

export type ThemeType = typeof base & ThemeTypeColor; // This is the type definition for my theme object.

const theme = base; // set the light theme as the default.
export default theme;
