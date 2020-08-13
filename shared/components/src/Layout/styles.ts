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
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  })
);
