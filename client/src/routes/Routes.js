import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
// import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Landing} />
      {/* <Route path='/register' component={SignUp} /> */}
    </Switch>
  );
};

export default Routes;
