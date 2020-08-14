import * as React from 'react';
import clsx from 'clsx';
// Material UI
import {Card} from '@material-ui/core';
// Types and type guards
import type {ConceptArtPath} from '@vantage/types';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  path: ConceptArtPath;
  index: number;
  width: number;
};

const ConceptArt: React.FC<Props> = (props) => {
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
