// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      position: 'relative',
      transition: `color ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
);
