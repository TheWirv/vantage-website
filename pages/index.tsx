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
// Hooks
import {useComponentDimensions} from '@vantage/hooks';
// Components
import {Spotlight, NewsCarousel} from 'page-components/home';
import {Layout} from '@vantage/components';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const siteTitle = 'Vantage Game';

const Home: React.FC<Props> = (props) => {
  // Refs
  const newsSliderRef = React.createRef<HTMLDivElement>();

  // State
  const [marginTop, setMarginTop] = React.useState<string>();

  // Hooks
  const {width: newsSliderWidth} = useComponentDimensions(newsSliderRef);

  // Styles
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
          <Container ref={newsSliderRef} className={classes.container}>
            <Typography variant="h5">News</Typography>
            <NewsCarousel newsExcerpts={props.newsExcerpts} containerWidth={newsSliderWidth} />
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
