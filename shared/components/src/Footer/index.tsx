import {DateTime} from 'luxon';
// Material UI
import {Container, Typography} from '@material-ui/core';
// Types and type guards
import type {FunctionComponent} from 'react';
// Hooks
import {useScrollPosition} from '@vantage/hooks';
// Components
import Link from '../Link';
// Styles
import {useStyles, StyleProps} from './styles';

const Footer: FunctionComponent = () => {
  // Hooks
  const scrollPosition = useScrollPosition();

  // Styles
  const styleProps: StyleProps = {scrollPosition};
  const classes = useStyles(styleProps);

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Typography>&copy; {DateTime.local().year} Vantage Point</Typography>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Container>
    </footer>
  );
};

export default Footer;
