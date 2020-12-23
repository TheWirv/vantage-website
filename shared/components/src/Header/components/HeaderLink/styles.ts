// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const getTransition = (theme: Theme, key: 'text-shadow' | 'color') =>
  `${key} ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`;

const getTextShadow = (theme: Theme) =>
  `0 0 ${theme.spacing(1)}px ${theme.palette.primary.main}, 0 0 ${theme.spacing(2)}px ${
    theme.palette.primary.main
  }, 0 0 ${theme.spacing(3)}px ${theme.palette.primary.main}`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      transition: `${getTransition(theme, 'text-shadow')}, ${getTransition(theme, 'color')}`,
      '&:hover': {
        textShadow: getTextShadow(theme),
      },
    },
    active: {
      color: theme.palette.primary.main,
      textShadow: getTextShadow(theme),
    },
  })
);
