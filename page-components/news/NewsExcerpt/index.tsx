import * as React from 'react';
// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Card, Typography} from '@material-ui/core';
// Types
import type {NewsPost} from '@vantage/types/news';
// Components
import {Date, Link} from '@vantage/components';

type Props = {
  newsExcerpt: Omit<NewsPost, 'content'>;
};

const NewsExcerpt: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
      <Typography>{props.newsExcerpt.excerpt}</Typography>
    </Card>
  );
};

export default NewsExcerpt;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
    },
    subtitle: {
      color: theme.palette.text.secondary,
    },
  })
);
