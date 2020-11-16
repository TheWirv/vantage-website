// Material UI
import {Card, Typography} from '@material-ui/core';
// Types and type guards
import type {NewsPost} from '@vantage/types';
import type {FunctionComponent} from 'react';
// Components
import {Date, Link} from '@vantage/components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  newsExcerpt: Omit<NewsPost, 'content'>;
  isLast: boolean;
};

const NewsExcerpt: FunctionComponent<Props> = (props) => {
  const {isLast} = props;
  const styleProps: StyleProps = {isLast};
  const classes = useStyles(styleProps);

  return (
    <Card className={classes.card} component="article">
      <Typography variant="h5">
        <Link href={`/news/${encodeURIComponent(props.newsExcerpt.id)}`}>
          {props.newsExcerpt.title}
        </Link>
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
        {'posted on '}
        <Date dateString={props.newsExcerpt.date} />
      </Typography>
      <section dangerouslySetInnerHTML={{__html: props.newsExcerpt.excerpt}} />
    </Card>
  );
};

export default NewsExcerpt;
