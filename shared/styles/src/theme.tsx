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
      light: '#f2a46c',
      main: '#bb5118',
      dark: '#812e01',
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
