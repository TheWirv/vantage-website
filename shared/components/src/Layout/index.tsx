import {useRouter} from 'next/router';
// Material UI
import {Container, Fab, Paper, Typography} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';
// Types and type guards
import type {ReactElement, ElementType, HTMLAttributes, FunctionComponent} from 'react';
// Components
import Header from '../Header';
import Footer from '../Footer';
import ElevateOnScroll from '../ElevateOnScroll';
import {Breadcrumbs, ScrollToTop} from './components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  children: ReactElement | ReactElement[];
  heading: string;
  component?: ElementType<HTMLAttributes<HTMLElement>>;
  onHome?: boolean;
};

const Layout: FunctionComponent<Props> = (props) => {
  const {onHome} = props;
  const styleProps: StyleProps = {onHome};
  const classes = useStyles(styleProps);

  const router = useRouter();
  const rootRoute = router.pathname.split('/').filter((x) => x)[0];
  const breadcrumbDeepLevelTitle: string | undefined =
    rootRoute === 'news' || rootRoute === 'lore' ? props.heading : undefined;

  return (
    <>
      <span id="back-to-top-anchor" className={classes.backToTop} />
      <Header />
      <ElevateOnScroll>
        <Paper component="main" square className={classes.main}>
          {props.onHome ? (
            <>{props.children}</>
          ) : (
            <Container
              maxWidth="md"
              className={classes.container}
              component={props.component ?? 'div'}>
              <Breadcrumbs deepLevelTitle={breadcrumbDeepLevelTitle} />
              <Typography variant="h4" className={classes.title}>
                {props.heading}
              </Typography>
              {props.children}
            </Container>
          )}
        </Paper>
      </ElevateOnScroll>
      <Footer />
      <ScrollToTop>
        <Fab color="primary" size="small" className={classes.fab} aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default Layout;
