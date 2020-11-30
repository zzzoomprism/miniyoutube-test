import { ThemeOptions } from '@material-ui/core';

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: '#fafafa',
      main: '#F0C808',
      dark: '#eeeeee',
    },
    secondary: {
      main: '#F0C808',
    },
    background: {
      default: '#2B303A',
      paper: '#383F4C',
    },
    type: 'dark',
  },
  typography: {
    allVariants: {
      color: '#f1f1f1',
    },
    h1: {
      fontSize: 50,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 27,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 17,
    },
    h6: {
      fontSize: 15,
    },
    fontSize: 14,
    fontFamily: [
      'Poppins',
    ].join(','),
  },
};

export { theme };
