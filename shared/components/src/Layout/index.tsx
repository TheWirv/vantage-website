import * as React from 'react';
import {useRouter} from 'next/router';
// Material UI
import {Container, Fab, Paper, Typography} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';
// Components
import Header from '../Header';
import Footer from '../Footer';
import ElevateOnScroll from '../ElevateOnScroll';
import {Breadcrumbs, ScrollToTop} from './components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  heading: string;
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  onHome?: boolean;
  marginTop?: string;
};

const Layout: React.FC<Props> = (props) => {
  const {onHome, marginTop} = props;
  const styleProps: StyleProps = {onHome, marginTop};
  const classes = useStyles(styleProps);

  const router = useRouter();
  const rootRoute = router.pathname.split('/').filter((x) => x)[0];
  const newsHeading: string | undefined = rootRoute === 'news' ? props.heading : undefined;

  return (
    <>
      <Header />
      <ElevateOnScroll>
        <>
          <Paper component="main" square className={classes.main} elevation={0}>
            {props.onHome ? (
              <>{props.children}</>
            ) : (
              <Container
                maxWidth="md"
                className={classes.container}
                component={props.component ?? 'div'}>
                <Breadcrumbs newsHeading={newsHeading} />
                <Typography variant="h4" className={classes.title}>
                  {props.heading}
                </Typography>
                {props.children}
              </Container>
            )}
          </Paper>
        </>
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
