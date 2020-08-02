import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Container} from '@material-ui/core';
// Components
import {Layout} from 'shared/components';

const siteTitle = 'Join the team!';

const News: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>

    <Layout>
      <Container>
        <h1>Wanna join the team?</h1>
      </Container>
    </Layout>
  </>
);

export default News;
