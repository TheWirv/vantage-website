import * as React from 'react';
import Head from 'next/head';
// Components
import {Layout} from 'shared/components';

const siteTitle = 'Vantage News';

const LoreEntry: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>

    <Layout>
      <h1>You'll find news here.</h1>
    </Layout>
  </>
);

export default LoreEntry;
