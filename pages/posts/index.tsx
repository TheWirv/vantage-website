import {useState, useEffect} from 'react';
import Head from 'next/head';
import * as Contentful from 'contentful';
// Types and type guards
import type {FunctionComponent} from 'react';
// Components
import Post from './post';
import {Layout} from '@vantage/components';

const siteTitle = 'Vantage Posts';
const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

const Posts: FunctionComponent = () => {
  const fetchEntries = async () => {
    const entries = await client.getEntries();
    if (entries.items) {
      return entries.items;
    }
    // console.error(`Error getting entries for ${contentType.name}.`);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await fetchEntries();
      // setPosts([...allPosts]);
    };
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Layout heading="You'll find news here.">
        {/* {posts.length > 0
          ? posts.map((p) => (
              <Post
                key={p.fields.title}
                alt={p.fields.alt}
                date={p.fields.date}
                image={p.fields.image2.fields.file.url}
                title={p.fields.title}
                url={p.fields.url}
              />
            ))
          : null} */}
      </Layout>
    </>
  );
};

export default Posts;
