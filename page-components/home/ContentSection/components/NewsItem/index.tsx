import clsx from 'clsx';
// Material UI
import {Card, Typography} from '@material-ui/core';
// Types and type guards
import type {NewsPost} from '@vantage/types';
import type {FunctionComponent} from 'react';
// Styles
import {useStyles} from './styles';

type Props = {
  newsExcerpt: Omit<NewsPost, 'content'>;
  index: number;
};

const NewsItem: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card
      component="article"
      className={clsx(`keen-slider__slide number-slide${props.index + 1}`, classes.card)}>
      <Typography>{props.newsExcerpt.title}</Typography>
      <section dangerouslySetInnerHTML={{__html: props.newsExcerpt.excerpt}} />
    </Card>
  );
};

export default NewsItem;
