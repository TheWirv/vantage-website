import * as React from 'react';
// Material UI
import {useScrollTrigger} from '@material-ui/core';

type Props = {
  children: React.ReactElement;
};

const ElevateOnScroll: React.FC<Props> = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevateOnScroll;
