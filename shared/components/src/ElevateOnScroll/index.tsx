import {cloneElement} from 'react';
// Material UI
import {useScrollTrigger} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';

type Props = {
  children: React.ReactElement;
};

const ElevateOnScroll: FunctionComponent<Props> = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevateOnScroll;
