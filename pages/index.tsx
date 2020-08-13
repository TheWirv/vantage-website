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
          <Container maxWidth="md" ref={newsSliderRef} className={classes.container}>
            <Typography variant="h5" className={classes.subsectionHeading}>
              News
            </Typography>
            <NewsCarousel newsExcerpts={props.newsExcerpts} containerWidth={newsSliderWidth} />
            <Typography variant="h5" className={classes.subsectionHeading}>
              Lore
            </Typography>
            <NewsCarousel newsExcerpts={props.newsExcerpts} containerWidth={newsSliderWidth} />
            <Typography variant="h5" className={classes.subsectionHeading}>
              Concept Art
            </Typography>
            <NewsCarousel newsExcerpts={props.newsExcerpts} containerWidth={newsSliderWidth} />
            <Typography>Wanna join the team? Here's our Discord:</Typography>
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
      padding: theme.spacing(2, 2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2, 3),
      },
    },
    subsectionHeading: {
      marginBottom: theme.spacing(1),
    },
  })
);
