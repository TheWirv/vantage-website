import * as React from 'react';
// Material UI
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
// Hooks
import {useScrollPosition, useComponentDimensions} from '@vantage/hooks';

type StyleProps = {
  scrollPosition: number;
  imageHeight: number;
};

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

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: (props: StyleProps) => `${props.imageHeight * (2 / 3)}px`,
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: '#08080888',
      zIndex: -90,
    },
    image: {
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -100,
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 3}px)`,
    },
    title: {
      fontSize: (props: StyleProps) => `${props.imageHeight / 7.5}px`,
      transform: (props: StyleProps) => `translateY(${props.scrollPosition * (1 / 2.55)}px)`,
    },
  })
);
