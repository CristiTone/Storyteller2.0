import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
