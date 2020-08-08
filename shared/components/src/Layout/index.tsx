import * as React from 'react';
// Material UI
import {Container, Fab, Paper, Typography} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';
// Components
import Header from '../Header';
import Footer from '../Footer';
import ElevateOnScroll from '../ElevateOnScroll';
import ScrollToTop from './components/ScrollToTop';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  heading: string;
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  onHome?: boolean;
};

export type StyleProps = {
  onHome?: boolean;
};

const Layout: React.FC<Props> = (props) => {
  const styleProps: StyleProps = {onHome: props.onHome};
  const classes = useStyles(styleProps);

  return (
    <>
      <Header />
      <ElevateOnScroll>
        <Paper component="main" square className={classes.main}>
          {props.onHome ? (
            <>{props.children}</>
          ) : (
            <Container className={classes.container} component={props.component ?? 'div'}>
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
