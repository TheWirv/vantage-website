// Material UI
import {makeStyles, createStyles} from '@material-ui/core/styles';

export type StyleProps = {
  scrollPosition: number;
  imageHeight: number;
};

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: (props: StyleProps) => `${props.imageHeight * (2 / 3)}px`,
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: '#08080888',
      zIndex: -90,
    },
    image: {
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -100,
      transform: (props: StyleProps) => `translateY(-${props.scrollPosition / 3}px)`,
    },
    title: {
      fontSize: (props: StyleProps) => `${props.imageHeight / 7.5}px`,
      transform: (props: StyleProps) => `translateY(${props.scrollPosition * (1 / 2.55)}px)`,
    },
  })
);

export default useStyles;
