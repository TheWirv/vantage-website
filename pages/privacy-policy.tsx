import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Container} from '@material-ui/core';
// Components
import {Layout} from 'shared/components';

const siteTitle = 'Privacy Policy';

const PrivacyPolicy: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>

    <Layout>
      <Container>
        <h1>We value your privacy!</h1>
      </Container>
    </Layout>
  </>
);

export default PrivacyPolicy;
