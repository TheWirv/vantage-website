// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginBottom: theme.spacing(26),
      boxShadow: theme.shadows[4],
    },
    fab: {
      transition: `background-color ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`,
    },
    scrollToTop: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
