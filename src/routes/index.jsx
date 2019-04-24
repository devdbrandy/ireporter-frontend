import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/container/Home';
import Signin from '../components/container/SigninPage';
import Dashboard from '../components/view/Dashboard';
import Profile from '../components/view/Profile';
import Settings from '../components/view/Settings';
import BrowseRecords from '../components/view/BrowseRecords';
import ProtectedRoute from '../components/container/ProtectedRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={Signin} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/browse" component={BrowseRecords} />
    </Switch>
  </Router>
);

export default Routes;
