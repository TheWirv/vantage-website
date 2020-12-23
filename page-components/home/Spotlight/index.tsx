import {createRef} from 'react';
import Image from 'next/image';
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
  const chevronRef = createRef<HTMLDivElement>();

  // Hooks
  const scrollPosition = useScrollPosition();
  const {width: chevronWidth} = useComponentDimensions(chevronRef);
  const styleProps: StyleProps = {scrollPosition, chevronWidth};
  const classes = useStyles(styleProps);

  console.log('scroll position:', scrollPosition);

  return (
    <Box className={classes.container}>
      <div className={classes.image}>
        <Image
          src="/images/uploads/vantage-map.png"
          loading="eager"
          layout="fill"
          quality={90}
          alt="Vantage Map"
          objectFit="cover"
        />
      </div>
      <Box className={classes.overlayContainer}>
        <Box className={classes.overlay} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h1" className={classes.title}>
            Vantage
          </Typography>
        </Box>
      </Box>
      <div ref={chevronRef} className={classes.scrollDownIcon}>
        <KeyboardArrowDownRounded fontSize="large" />
      </div>
    </Box>
  );
};

export default Spotlight;
