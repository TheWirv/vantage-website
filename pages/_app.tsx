import * as React from 'react';
// types
import type {AppProps} from 'next/app';
// styles
import 'styles/globals.scss';

const App = ({Component, pageProps}: AppProps) => <Component {...pageProps} />;

export default App;
