import * as React from 'react';
import clsx from 'clsx';
// Material UI
import {Card, Typography} from '@material-ui/core';
// Types
import type {NewsPost} from '@vantage/types/news';
// Styles
import {useStyles} from './styles';

type Props = {
  newsExcerpt: Omit<NewsPost, 'content'>;
  index: number;
};

const NewsItem: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={clsx(`keen-slider__slide number-slide${props.index + 1}`, classes.card)}>
      <Typography>{props.newsExcerpt.title}</Typography>
      <section dangerouslySetInnerHTML={{__html: props.newsExcerpt.excerpt}} />
    </Card>
  );
};

export default NewsItem;
