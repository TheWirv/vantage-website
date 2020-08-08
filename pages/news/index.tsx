import * as React from 'react';
import Head from 'next/head';
// Types
import type {NewsPost} from '@vantage/types/news';
import type {GetStaticProps} from 'next';
// Lib
import {getAllNewsPosts} from '@vantage/lib/news';
// Components
import {NewsExcerpt} from 'page-components/news';
import {Layout} from '@vantage/components';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const siteTitle = 'Vantage News';

const News: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="You'll find news here.">
      {props.newsExcerpts.map((newsExcerpt) => (
        <NewsExcerpt key={newsExcerpt.id} newsExcerpt={newsExcerpt} />
      ))}
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsExcerpts = await getAllNewsPosts();
  return {
    props: {
      newsExcerpts,
    },
  };
};

export default News;
