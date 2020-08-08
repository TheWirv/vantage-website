import * as React from 'react';
// Material UI
import {Card, Typography} from '@material-ui/core';
// Types
import type {NewsPost} from '@vantage/types/news';
// Components
import {Date, Link} from '@vantage/components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  newsExcerpt: Omit<NewsPost, 'content'>;
  isLast: boolean;
};

const NewsExcerpt: React.FC<Props> = (props) => {
  const styleProps: StyleProps = {isLast: props.isLast};
  const classes = useStyles(styleProps);

  return (
    <Card className={classes.card} component="article">
      <Typography variant="h5">
        <Link href="/news/[id]" as={`/news/${props.newsExcerpt.id}`}>
          {props.newsExcerpt.title}
        </Link>
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
        {'written on '}
        <Date dateString={props.newsExcerpt.date} />
        {` by ${props.newsExcerpt.author}`}
      </Typography>
      <section dangerouslySetInnerHTML={{__html: props.newsExcerpt.excerpt}} />
    </Card>
  );
};

export default NewsExcerpt;
