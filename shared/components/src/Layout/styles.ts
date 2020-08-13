// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export type StyleProps = {
  onHome?: boolean;
  marginTop?: string;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: (props: StyleProps) => props.marginTop,
      marginBottom: theme.spacing(24),
      backgroundColor: (props: StyleProps) =>
        !props.onHome ? theme.palette.background.default : '#0000',
    },
    fab: {
      transition: `background-color ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`,
    },
    container: {
      padding: theme.spacing(2, 2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2, 3),
      },
    },
    title: {
      margin: theme.spacing(2, 0),
    },
  })
);
