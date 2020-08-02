// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
      height: theme.spacing(25),
      zIndex: -50,
      backgroundColor: theme.palette.grey[900],
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
);
