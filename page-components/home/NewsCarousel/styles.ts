// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(0, -2),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(0, -3),
      },
    },
    navigationWrapper: {
      position: 'relative',
    },
    arrow: {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
      background: theme.palette.action.hover,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      transition: theme.transitions.create('background'),
      '&:hover': {
        background: theme.palette.action.focus,
      },
    },
    arrowLeft: {
      left: theme.spacing(0.66),
    },
    arrowRight: {
      right: theme.spacing(0.66),
    },
    dots: {
      display: 'flex',
      padding: theme.spacing(1.2, 0),
      justifyContent: 'center',
    },
    dot: {
      border: 'none',
      width: 10,
      height: 10,
      background: theme.palette.action.focus,
      borderRadius: '50%',
      margin: theme.spacing(0, 0.66),
      padding: theme.spacing(0.66),
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
      transition: theme.transitions.create('background'),
    },
    dotActive: {
      background: theme.palette.action.active,
    },
  })
);
