// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export type StyleProps = {
  scrollPosition: number;
  imageHeight: number;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'fixed',
      top: 48,
      width: '100%',
      backgroundColor: '#08080888',
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 2.4}px)`,
      height: '25vh',
      [theme.breakpoints.up('sm')]: {
        height: '33vh',
      },
      [theme.breakpoints.up('md')]: {
        height: '50vh',
      },
      [theme.breakpoints.up('lg')]: {
        height: '75vh',
      },
    },
    image: {
      position: 'fixed',
      top: 48,
      width: '100%',
      zIndex: -100,
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 2}px)`,
    },
    title: {
      zIndex: -80,
      fontSize: (props: StyleProps) => `${props.imageHeight / 8.5}px`,
    },
  })
);
