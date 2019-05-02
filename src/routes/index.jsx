import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/container/Home';
import Signin from '../components/container/SigninPage';
import DashboardComponent from '../components/view/Dashboard';
import ProfileComponent from '../components/view/Profile';
import SettingsComponent from '../components/view/Settings';
import NewRecordComponent from '../components/view/NewRecord';
import EditRecordComponent from '../components/view/EditRecord';
import BrowseRecords from '../components/view/BrowseRecords';
import ProtectedRoute from '../components/container/ProtectedRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={Signin} />
      <ProtectedRoute path="/dashboard" component={DashboardComponent} />
      <ProtectedRoute path="/profile" component={ProfileComponent} />
      <ProtectedRoute path="/settings" component={SettingsComponent} />
      <ProtectedRoute path="/new/record" component={NewRecordComponent} />
      <ProtectedRoute path="/edit/record/:id" component={EditRecordComponent} />
      <Route path="/settings" component={SettingsComponent} />
      <Route path="/browse" component={BrowseRecords} />
    </Switch>
  </Router>
);

export default Routes;
