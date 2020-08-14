// Material UI
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export type StyleProps = {
  width: number;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      borderRadius: theme.shape.borderRadius,
      objectFit: 'cover',
      width: (props: StyleProps) => props.width,
      height: (props: StyleProps) => props.width / (16 / 9),
    },
  })
);
