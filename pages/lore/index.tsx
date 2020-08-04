import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'The Lore of Vantage';

const Lore: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="Here you'll find everything about the lore of Vantage.">
      <Typography>Lorem Ipsum</Typography>
    </Layout>
  </>
);

export default Lore;
