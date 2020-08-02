import * as React from 'react';
// Material UI
import {Container, Typography} from '@material-ui/core';
// Components
import Link from '../Link';
// Styles
import {useStyles} from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Typography>&copy; {new Date().getFullYear()} Joyride Studios</Typography>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Container>
    </footer>
  );
};

export default Footer;
