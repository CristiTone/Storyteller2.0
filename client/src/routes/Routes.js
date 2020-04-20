import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Gallery from '../pages/Gallery';
import Profile from '../pages/Profile';
import Alert from '../components/Alert';

const Routes = () => {
  return (
    <>
      <Alert />
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <PrivateRoute exact path='/gallery' component={Gallery} />
        <PrivateRoute exact path='/search' component={Gallery} />
        <PrivateRoute exact path='/your-library' component={Gallery} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
    </>
  );
};

export default Routes;
