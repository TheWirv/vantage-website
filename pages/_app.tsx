import * as React from 'react';
import Head from 'next/head';
// Material UI
import {ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Types
import type {AppProps} from 'next/app';
// Styles
import {theme} from '@vantage/styles';
import 'keen-slider/keen-slider.min.css';
import 'fontsource-roboto/latin-400-normal.css';
import 'fontsource-roboto/latin-700-normal.css';

const App = (props: AppProps) => {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    console.log('jssStyles:', jssStyles);
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vantage Game" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:image" content="/images/car-on-fire.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
};

export default App;
