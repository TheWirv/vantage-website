import * as React from 'react';
// Material UI
import {Box, Typography} from '@material-ui/core';
// Types
import type {StyleProps} from './styles';
// Hooks
import {useScrollPosition, useComponentDimensions} from 'shared/hooks';
// Styles
import useStyles from './styles';

const Spotlight: React.FC = () => {
  // Refs
  const imageRef = React.createRef<HTMLImageElement>();

  // Hooks
  const scrollPosition = useScrollPosition();
  const {height: imageHeight} = useComponentDimensions(imageRef);
  const styleProps: StyleProps = {scrollPosition, imageHeight};
  const classes = useStyles(styleProps);

  return (
    <>
      <img
        ref={imageRef}
        src="/images/car-on-fire.jpg"
        className={classes.image}
        alt="Vantage Game"
      />
      <div className={classes.overlay} />
      <Box
        component="section"
        className={classes.container}
        display="flex"
        flexBasis={1}
        flex={1}
        flexGrow={1}
        flexShrink={1}
        alignItems="center"
        justifyContent="center">
        <Typography className={classes.title}>Vantage</Typography>
      </Box>
    </>
  );
};

export default Spotlight;
