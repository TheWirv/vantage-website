import * as React from 'react';
import Head from 'next/head';
// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Box, Container, Typography} from '@material-ui/core';
// Types
import type {NewsPost} from '@vantage/types/news';
import type {GetStaticProps} from 'next';
// Lib
import {getHomePosts} from '@vantage/lib/news';
// Components
import {Spotlight, NewsCarousel} from 'page-components/home';
import {Layout} from '@vantage/components';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const siteTitle = 'Vantage Game';

const Home: React.FC<Props> = (props) => {
  const [marginTop, setMarginTop] = React.useState<string>();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Layout onHome heading="" marginTop={marginTop}>
        <Spotlight setMarginTop={setMarginTop} />
        <Box className={classes.wrapper}>
          <Container className={classes.container}>
            <Typography variant="h5">News</Typography>
            <NewsCarousel newsExcerpts={props.newsExcerpts} />
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsExcerpts = await getHomePosts();
  return {
    props: {
      newsExcerpts,
    },
  };
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      zIndex: 0,
      backgroundColor: theme.palette.background.default,
    },
    container: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
  })
);
