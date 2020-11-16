// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginTop: theme.spacing(0.75),
      marginRight: theme.spacing(6),
    },
    linkGroup: {
      '& > * + *': {
        marginLeft: theme.spacing(3),
      },
    },
    collapse: {
      backgroundColor: theme.palette.background.default,
    },
    collapseLink: {
      margin: theme.spacing(1, 2),
    },
  })
);
