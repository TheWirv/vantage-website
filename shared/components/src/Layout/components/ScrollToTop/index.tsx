// Material UI
import {Zoom, useScrollTrigger} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';
// Styles
import {useStyles} from './styles';

const ScrollToTop: FunctionComponent<{children: React.ReactElement}> = (props) => {
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

export default ScrollToTop;
