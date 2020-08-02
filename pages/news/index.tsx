import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Container} from '@material-ui/core';
// Components
import {Layout} from 'shared/components';

const siteTitle = 'Vantage News';

const News: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>

    <Layout>
      <Container>
        <h1>You'll find news here.</h1>
      </Container>
    </Layout>
  </>
);

export default News;