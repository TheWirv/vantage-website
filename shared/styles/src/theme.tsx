import {createMuiTheme} from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        color: '#efefef',
      },
    },
  },
  palette: {
    type: 'dark',
    text: {
      primary: '#efefef',
    },
    primary: {
      light: '#f06449',
      main: '#c5371c',
      dark: '#891d08',
      contrastText: '#efefef',
    },
  },
  transitions: {
    duration: {
      shortest: 0.15,
      shorter: 0.2,
      short: 0.25,
      standard: 0.3,
      complex: 0.375,
      enteringScreen: 0.225,
      leavingScreen: 0.195,
    },
  },
});

export default theme;
