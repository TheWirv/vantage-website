import {createRef} from 'react';
// Material UI
import {Box, Typography} from '@material-ui/core';
import {KeyboardArrowDownRounded} from '@material-ui/icons';
// Types and type guards
import type {FunctionComponent} from 'react';
// Hooks
import {useScrollPosition, useComponentDimensions} from '@vantage/hooks';
// Styles
import {useStyles, StyleProps} from './styles';

const Spotlight: FunctionComponent = () => {
  // Refs
  const imageRef = createRef<HTMLImageElement>();
  const chevronRef = createRef<HTMLDivElement>();

  // Hooks
  const scrollPosition = useScrollPosition();
  const {height: imageHeight} = useComponentDimensions(imageRef);
  const {width: chevronWidth} = useComponentDimensions(chevronRef);
  const styleProps: StyleProps = {scrollPosition, imageHeight, chevronWidth};
  const classes = useStyles(styleProps);

  return (
    <Box className={classes.container}>
      <img
        ref={imageRef}
        src="/images/vantage-map.png"
        className={classes.image}
        alt="Vantage Game"
      />
      <Box className={classes.overlay} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" className={classes.title}>
          Vantage
        </Typography>
      </Box>
      <div ref={chevronRef} className={classes.scrollDownIcon}>
        <KeyboardArrowDownRounded fontSize="large" />
      </div>
    </Box>
  );
};

export default Spotlight;
