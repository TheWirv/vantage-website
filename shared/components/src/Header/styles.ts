// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      flexGrow: 1,
    },
    linkGroup: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    collapse: {
      backgroundColor: theme.palette.background.default,
    },
    collapseLink: {
      margin: theme.spacing(1),
    },
  })
);
