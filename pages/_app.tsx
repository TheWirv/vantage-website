import {useEffect} from 'react';
import Head from 'next/head';
// Material UI
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Types and type guards
import type {AppProps} from 'next/app';
// Styles
import {theme} from '@vantage/styles';
import 'fontsource-lora/latin-400-normal.css';
import 'fontsource-lora/latin-700-normal.css';
import 'fontsource-cinzel-decorative/latin-400-normal.css';
import 'fontsource-cinzel-decorative/latin-700-normal.css';

const App = (props: AppProps) => {
  const {Component, pageProps} = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vantage Game" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:image" content="/images/vantage-map.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
