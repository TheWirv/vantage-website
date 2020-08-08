// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginRight: theme.spacing(-2),
      marginLeft: theme.spacing(-2),
    },
  })
);
