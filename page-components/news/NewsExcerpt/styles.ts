// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export type StyleProps = {
  isLast: boolean;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(1),
      marginBottom: (props: StyleProps) => (props.isLast ? 0 : theme.spacing(2)),
    },
    subtitle: {
      color: theme.palette.text.secondary,
    },
  })
);
