import Head from 'next/head';
// Types and type guards
import type {NewsPost} from '@vantage/types';
import type {FunctionComponent} from 'react';
import type {GetStaticProps} from 'next';
// Lib
// import {getAllPosts} from '@vantage/lib/news';
// Components
import {NewsExcerpt} from 'page-components/news';
import {Layout} from '@vantage/components';

type Props = {
  // newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const siteTitle = 'Vantage News';

const News: FunctionComponent<Props> = (props) => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="You'll find news here.">
      {/* props.newsExcerpts.map((newsExcerpt, index) => (
        <NewsExcerpt
          key={newsExcerpt.id}
          newsExcerpt={newsExcerpt}
          isLast={index === props.newsExcerpts.length - 1}
        />
      )) */}
    </Layout>
  </>
);

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const newsExcerpts = await getAllPosts();
//   return {
//     props: {
//       newsExcerpts,
//     },
//   };
// };

export default News;
