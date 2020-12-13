import Head from 'next/head';
// Types and type guards
import type {NewsPost as NewsPostType} from '@vantage/types';
import type {FunctionComponent} from 'react';
import type {GetStaticProps, GetStaticPaths} from 'next';
// Lib
// import {getPostData, getIds} from '@vantage/lib/news';
// Components
import {Layout} from '@vantage/components';

type Props = {
  // data: Omit<NewsPostType, 'excerpt'>;
};

type Id = {
  id: string;
};

const NewsPost: FunctionComponent<Props> = (props) => (
  <>
    <Head>
      <title>{'Title' /* props.data.title */}</title>
      <meta name="og:title" content={'Title' /* props.data.title */} />
    </Head>
    <Layout heading={'Title' /* props.data.title */} component="article">
      <p>Content</p>
    </Layout>
  </>
);

// export const getStaticProps: GetStaticProps<Props, Id> = async (context) => {
//   const data = await getPostData(context.params!.id);
//   return {
//     props: {
//       data,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths<Id> = async () => {
//   const paths = getIds().map((id) => ({params: id}));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default NewsPost;
