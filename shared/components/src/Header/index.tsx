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
  useScrollTrigger,
} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
// Components
import Link from '../Link';
import {HeaderLink} from './components';
// Styles
import {useStyles} from './styles';

type Props = {
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
  // State
  const [isMenuOpenend, setMenuOpenend] = React.useState(false);

  // Styles
  const classes = useStyles();

  const toggleMenu = () => setMenuOpenend((prev) => !prev);

  return (
    <>
      <ElevationScroll {...props}>
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
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;
