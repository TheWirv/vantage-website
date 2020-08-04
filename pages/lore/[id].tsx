import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'Lore 1';

const LoreEntry: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="Lore 1">
      <Typography>Lorem Ipsum</Typography>
    </Layout>
  </>
);

export default LoreEntry;
