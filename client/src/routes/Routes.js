import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Gallery from '../pages/Gallery';

const Routes = () => {
  return (
    <Switch>
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      <PrivateRoute exact path='/gallery' component={Gallery} />
      <PrivateRoute exact path='/search' component={Gallery} />
      <PrivateRoute exact path='/your-library' component={Gallery} />
    </Switch>
  );
};

export default Routes;
