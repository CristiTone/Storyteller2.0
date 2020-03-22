import { createMuiTheme } from '@material-ui/core';

/*
background page: #B9BAC8
page: #FFF9E9
primary: #141DD6
secondary: #797DCA
*/

const theme = createMuiTheme({
  palette: {},
  props: {
    MuiTextField: {
      variant: 'outlined'
    }
  },
  overrides: {}
});

export default theme;
