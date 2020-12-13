// Material UI
import {Card, Typography} from '@material-ui/core';
// Types and type guards
import type {LoreEntry as LoreEntryType} from '@vantage/types';
import type {FunctionComponent} from 'react';
// Components
import {Date, Link} from '@vantage/components';
// Styles
import {useStyles, StyleProps} from './styles';

type Props = {
  loreEntry: Omit<LoreEntryType, 'content'>;
  isLast: boolean;
};

const LoreEntry: FunctionComponent<Props> = (props) => {
  const {isLast} = props;
  const styleProps: StyleProps = {isLast};
  const classes = useStyles(styleProps);

  return (
    <Card className={classes.card} component="article">
      <Typography variant="h5">
        <Link href={`/lore/${encodeURIComponent(props.loreEntry.id)}`}>
          {props.loreEntry.title}
        </Link>
      </Typography>
    </Card>
  );
};

export default LoreEntry;
