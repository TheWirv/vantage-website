import * as React from 'react';
// Material UI
import {Card, Typography} from '@material-ui/core';
// Types and type guards
import type {LoreEntry as LoreEntryType} from '@vantage/types';
// Components
import {Date, Link} from '@vantage/components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  loreEntry: Omit<LoreEntryType, 'content'>;
  isLast: boolean;
};

const LoreEntry: React.FC<Props> = (props) => {
  const {isLast} = props;
  const styleProps: StyleProps = {isLast};
  const classes = useStyles(styleProps);

  return (
    <Card className={classes.card} component="article">
      <Typography variant="h5">
        <Link href="/lore/[id]" as={`/lore/${props.loreEntry.id}`}>
          {props.loreEntry.title}
        </Link>
      </Typography>
      <section dangerouslySetInnerHTML={{__html: props.loreEntry.summary}} />
    </Card>
  );
};

export default LoreEntry;
