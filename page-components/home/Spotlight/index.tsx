import {createRef} from 'react';
// Material UI
import {Box, Typography} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';
// Hooks
import {useScrollPosition, useComponentDimensions, useIsomorphicLayoutEffect} from '@vantage/hooks';
// Styles
import {useStyles, StyleProps} from './styles';

const Spotlight: FunctionComponent = () => {
  // Refs
  const imageRef = createRef<HTMLImageElement>();

  // Hooks
  const scrollPosition = useScrollPosition();
  const {height: imageHeight} = useComponentDimensions(imageRef);
  const styleProps: StyleProps = {scrollPosition, imageHeight};
  const classes = useStyles(styleProps);

  return (
    <>
      <img
        ref={imageRef}
        src="/images/vantage-map.png"
        className={classes.image}
        alt="Vantage Game"
      />
      <Box
        component="section"
        className={classes.container}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Typography variant="h4" className={classes.title}>
          Vantage
        </Typography>
      </Box>
    </>
  );
};

export default Spotlight;
