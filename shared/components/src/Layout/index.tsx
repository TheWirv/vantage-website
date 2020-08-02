import * as React from 'react';
// Material UI
import {Fab, Zoom, useScrollTrigger} from '@material-ui/core';
// Components
import Header from '../Header';
import Footer from '../Footer';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const ScrollToTop: React.FC<{children: React.ReactElement}> = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollToTop}>
        {props.children}
      </div>
    </Zoom>
  );
};

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles();
  console.log('props:', props);

  return (
    <>
      <Header>Test</Header>
      <main className={classes.main}>{props.children}</main>
      <Footer />
      <ScrollToTop>
        <Fab color="primary" size="small" className={classes.fab} aria-label="scroll back to top">
          ^
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default Layout;
