// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const getTransition = (theme: Theme, key: 'right' | 'left' | 'border-top-color' | 'color') =>
  `${key} ${theme.transitions.duration.short}s ${theme.transitions.easing.easeOut}`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      '&::after': {
        borderTop: `.1rem solid ${theme.palette.text.primary}`,
        position: 'absolute',
        right: '50%',
        bottom: '-.1rem',
        left: '50%',
        content: '""',
        transition: `${getTransition(theme, 'right')}, ${getTransition(
          theme,
          'left'
        )}, ${getTransition(theme, 'border-top-color')}`,
      },
      '&:hover::after': {
        borderTopColor: theme.palette.primary.main,
        right: 0,
        left: 0,
      },
    },
    active: {
      color: theme.palette.primary.main,
      '&::after': {
        borderTop: `.1rem solid ${theme.palette.primary.main}`,
        position: 'absolute',
        right: 0,
        bottom: '-.1rem',
        left: 0,
        content: '""',
      },
    },
  })
);
