import {createMuiTheme} from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        color: '#efefef',
      },
    },
    MuiBreadcrumbs: {
      root: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
      separator: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  palette: {
    type: 'dark',
    text: {
      primary: '#efefef',
    },
    primary: {
      light: '#fdad46',
      main: '#d08729',
      dark: '#935b12',
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
