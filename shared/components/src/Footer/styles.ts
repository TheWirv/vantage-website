// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export type StyleProps = {
  scrollPosition: number;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
      height: theme.spacing(24),
      zIndex: (props: StyleProps) => (props.scrollPosition > theme.spacing(24) * 2 ? -80 : -120),
      backgroundColor: theme.palette.grey[900],
    },
    container: {
      padding: theme.spacing(4, 2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4, 3),
      },
    },
  })
);
