import {createRef} from 'react';
import Head from 'next/head';
// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Box, Container, Typography} from '@material-ui/core';
// Types and type guards
import type {LoreEntry, NewsPost} from '@vantage/types';
import type {FunctionComponent} from 'react';
import type {GetStaticProps} from 'next';
// Lib
import {getHomeConceptArt} from '@vantage/lib/concept-art';
// import {getHomeLoreEntries} from '@vantage/lib/lore';
// import {getHomePosts} from '@vantage/lib/news';
// Hooks
import {useComponentDimensions} from '@vantage/hooks';
// Components
import {Spotlight, ContentSection} from 'page-components/home';
import {Layout} from '@vantage/components';

type Props = {
  // newsExcerpts: Array<Omit<NewsPost, 'content'>>;
  // loreEntries: Array<Omit<LoreEntry, 'content'>>;
  conceptArtPaths: string[];
};

const siteTitle = 'Vantage Game';

const Home: FunctionComponent<Props> = (props) => {
  // Refs
  const newsSliderRef = createRef<HTMLDivElement>();

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
      <Layout onHome heading="">
        <Spotlight />
        <Box className={classes.wrapper}>
          <Container maxWidth="md" ref={newsSliderRef} className={classes.container}>
            {
              <ContentSection
                type="news"
                containerWidth={newsSliderWidth}
                // content={props.newsExcerpts}
              />
              /* <ContentSection
              type="lore"
              containerWidth={newsSliderWidth}
              content={props.loreEntries}
            /> */
            }
            <ContentSection
              type="concept-art"
              containerWidth={newsSliderWidth}
              content={props.conceptArtPaths}
            />
            <Typography>Wanna join the team? Here's our Discord:</Typography>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const newsExcerpts = await getHomePosts();
  // const loreEntries = await getHomeLoreEntries();
  const conceptArtPaths = getHomeConceptArt();
  return {
    props: {
      // newsExcerpts,
      // loreEntries,
      conceptArtPaths,
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
  })
);
