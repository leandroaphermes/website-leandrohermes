import BasePage from "components/BasePage";
import ThemeProvider from "context/ThemeContext";
import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Leandro Hermes - Website</title>
        <meta name="description" content="Developer fullstack for web" />
      </Head>
      <GlobalStyles />
      <BasePage>
        <Component {...pageProps} />
      </BasePage>
    </ThemeProvider>
  );
}

export default App;
