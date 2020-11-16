// Material UI
import {makeStyles, createStyles} from '@material-ui/core/styles';
// Types and type guards
import type {Theme} from '@material-ui/core/styles';

export type StyleProps = {
  scrollPosition: number;
  imageHeight: number;
  chevronWidth: number;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
    },
    image: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 3}px)`,
      zIndex: -100,
    },
    overlay: {
      width: '100%',
      height: '100%',
      backgroundColor: '#08080888',
      zIndex: -50,
    },
    title: {
      position: 'fixed',
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 2}px)`,
      fontSize: (props: StyleProps) => `${props.imageHeight / 8.5}px`,
    },
    scrollDownIcon: {
      position: 'absolute',
      left: '50%',
      bottom: theme.spacing(2),
      marginLeft: (props: StyleProps) => -1 * (props.chevronWidth / 2),
    },
  })
);
