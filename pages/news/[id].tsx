import * as React from 'react';
import Head from 'next/head';
// Material UI
import {Typography} from '@material-ui/core';
// Types
import type {NewsPost as NewsPostType} from '@vantage/types/news';
import type {GetStaticProps, GetStaticPaths} from 'next';
// Lib
import {getPostData, getNewsPostIds} from '@vantage/lib/news';
// Components
import {Layout} from '@vantage/components';

type Props = {
  data: Omit<NewsPostType, 'excerpt'>;
};

type Id = {
  id: string;
};

const NewsPost: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{props.data.title}</title>
      <meta name="og:title" content={props.data.title} />
    </Head>
    <Layout heading={props.data.title}>
      <Typography>{props.data.content}</Typography>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<Props, Id> = async (context) => {
  const data = getPostData(context.params!.id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Id> = async () => {
  const paths = getNewsPostIds().map((id) => ({params: id}));
  return {
    paths,
    fallback: false,
  };
};

export default NewsPost;
