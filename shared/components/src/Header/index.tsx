import * as React from 'react';
// Material UI
import {AppBar, Toolbar, Typography, useScrollTrigger} from '@material-ui/core';
// Components
import Link from '../Link';
import {HeaderLink} from './components';
// Styles
import {useStyles} from './styles';

type Props = {
  children: string;
  home?: boolean;
};

type ElevationScrollProps = {
  children: React.ReactElement;
};

const ElevationScroll: React.FC<ElevationScrollProps> = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar variant="dense" className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <Link href="/">Vantage</Link>
            </Typography>
            <Typography className={classes.linkGroup}>
              <HeaderLink href="/news">News</HeaderLink>
              <HeaderLink href="/lore">Lore</HeaderLink>
              <HeaderLink href="/concept-art">Concept Art</HeaderLink>
              <HeaderLink href="/team">Team</HeaderLink>
              <HeaderLink href="/join">Join</HeaderLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;
