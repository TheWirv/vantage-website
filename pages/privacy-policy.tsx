import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Components
import {Layout} from '@vantage/components';

const siteTitle = 'Privacy Policy';

const PrivacyPolicy: React.FC = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="We value your privacy!">
      <Typography>Lorem Ipsum</Typography>
    </Layout>
  </>
);

export default PrivacyPolicy;
