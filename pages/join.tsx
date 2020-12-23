import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'Join the team!';

const Join: FunctionComponent = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="Wanna join the team?">
      <Typography>Lorem Ipsum</Typography>
    </Layout>
  </>
);

export default Join;
