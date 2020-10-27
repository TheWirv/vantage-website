import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'Concept Art';

const ConceptArt: FunctionComponent = () => (
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
