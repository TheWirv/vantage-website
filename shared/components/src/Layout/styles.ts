// Types
import type {StyleProps} from './index';
// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginBottom: theme.spacing(24),
      backgroundColor: (props: StyleProps) =>
        !props.onHome ? theme.palette.background.default : '#0000',
    },
    fab: {
      transition: `background-color ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`,
    },
    container: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  })
);
