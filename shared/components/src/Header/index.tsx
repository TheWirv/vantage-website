import * as React from 'react';
// Material UI
import {
  AppBar,
  Backdrop,
  Collapse,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
// Components
import Link from '../Link';
import ElevateOnScroll from '../ElevateOnScroll';
import {HeaderLink} from './components';
// Styles
import {useStyles} from './styles';

type Props = {
  home?: boolean;
};

const Header: React.FC<Props> = (props) => {
  // State
  const [isMenuOpenend, setMenuOpenend] = React.useState(false);

  // Styles
  const classes = useStyles();

  const toggleMenu = () => setMenuOpenend((prev) => !prev);

  return (
    <>
      <ElevateOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar variant="dense" className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <Link href="/">Vantage</Link>
            </Typography>
            <Hidden xsDown>
              <Typography className={classes.linkGroup}>
                <HeaderLink href="/news">News</HeaderLink>
                <HeaderLink href="/lore">Lore</HeaderLink>
                <HeaderLink href="/concept-art">Concept Art</HeaderLink>
                <HeaderLink href="/team">Team</HeaderLink>
                <HeaderLink href="/join">Join</HeaderLink>
              </Typography>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={toggleMenu} aria-label="menu">
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden smUp>
            <Collapse in={isMenuOpenend} timeout={400} className={classes.collapse}>
              <Typography variant="h6" className={classes.collapseLink}>
                <HeaderLink href="/news">News</HeaderLink>
              </Typography>
              <Typography variant="h6" className={classes.collapseLink}>
                <HeaderLink href="/lore">Lore</HeaderLink>
              </Typography>
              <Typography variant="h6" className={classes.collapseLink}>
                <HeaderLink href="/concept-art">Concept Art</HeaderLink>
              </Typography>
              <Typography variant="h6" className={classes.collapseLink}>
                <HeaderLink href="/team">Team</HeaderLink>
              </Typography>
              <Typography variant="h6" className={classes.collapseLink}>
                <HeaderLink href="/join">Join</HeaderLink>
              </Typography>
            </Collapse>
            <Backdrop open={isMenuOpenend} transitionDuration={400} onClick={toggleMenu} />
          </Hidden>
        </AppBar>
      </ElevateOnScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;
