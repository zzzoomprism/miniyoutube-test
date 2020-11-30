import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import { Box } from '@material-ui/core';
import Routes from './Routes';

const App = () => {
  const AppRoute = () => {
    return (
      <Switch>
         <Routes />
      </Switch>
    );
  };

  return (
    <HashRouter>
      <Header />
      <Box mt={6} ml={1} p={5} css={{ minHeight: '100vh' }}>
        <Switch>
          <AppRoute />
        </Switch>
      </Box>
    </HashRouter>
  );
};

export default App;
