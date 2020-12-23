import clsx from 'clsx';
// Material UI
import {Card, Typography} from '@material-ui/core';
// Types and type guards
import type {LoreEntry as LoreEntryType} from '@vantage/types';
import type {FunctionComponent} from 'react';
// Styles
import {useStyles} from './styles';

type Props = {
  loreEntry: Omit<LoreEntryType, 'content'>;
  index: number;
};

const LoreEntry: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card
      component="article"
      className={clsx(`keen-slider__slide number-slide${props.index + 1}`, classes.card)}>
      <Typography>{props.loreEntry.title}</Typography>
    </Card>
  );
};

export default LoreEntry;
