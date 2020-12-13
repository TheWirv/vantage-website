import clsx from 'clsx';
// Types and type guards
import type {FunctionComponent} from 'react';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  path: string;
  index: number;
  width: number;
};

const ConceptArt: FunctionComponent<Props> = (props) => {
  const styleProps: StyleProps = {width: props.width};
  const classes = useStyles(styleProps);

  return (
    <img
      src={props.path}
      alt="Vantage Concept Art"
      className={clsx(`keen-slider__slide number-slide${props.index + 1}`, classes.image)}
    />
  );
};

export default ConceptArt;
