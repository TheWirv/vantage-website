import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'Concept Art';

const ConceptArt: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="You'll find a bunch of concept art here.">
      <Typography>Lorem Ipsum</Typography>
    </Layout>
  </>
);

export default ConceptArt;
