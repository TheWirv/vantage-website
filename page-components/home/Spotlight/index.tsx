import * as React from 'react';
// Material UI
import {Box, Typography} from '@material-ui/core';
// Hooks
import {useScrollPosition, useComponentDimensions, useIsomorphicLayoutEffect} from '@vantage/hooks';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  setMarginTop: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Spotlight: React.FC<Props> = (props) => {
  // Refs
  const imageRef = React.createRef<HTMLImageElement>();

  // Hooks
  const scrollPosition = useScrollPosition();
  const {height: imageHeight} = useComponentDimensions(imageRef);
  const styleProps: StyleProps = {scrollPosition, imageHeight};
  const classes = useStyles(styleProps);

  useIsomorphicLayoutEffect(() => {
    props.setMarginTop(`${imageHeight * (2 / 3)}px`);
  }, [imageHeight]);

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
        alignItems="center"
        justifyContent="center">
        <Typography className={classes.title}>Vantage</Typography>
      </Box>
    </>
  );
};

export default Spotlight;
