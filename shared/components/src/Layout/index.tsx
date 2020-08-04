import * as React from 'react';
// Material UI
import {Box, Container, Fab, Typography} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';
// Components
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from './components/ScrollToTop';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  heading: string;
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
      <Box component="main" className={classes.main}>
        {props.onHome ? (
          <>{props.children}</>
        ) : (
          <Container className={classes.container}>
            <Typography variant="h4" className={classes.title}>
              {props.heading}
            </Typography>
            {props.children}
          </Container>
        )}
      </Box>
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
