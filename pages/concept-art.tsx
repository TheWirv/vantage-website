import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Container} from '@material-ui/core';
// Components
import {Layout} from 'shared/components';

const siteTitle = 'Concept Art';

const ConceptArt: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>

    <Layout>
      <Container>
        <h1>You'll find a bunch of concept art here.</h1>
      </Container>
    </Layout>
  </>
);

export default ConceptArt;