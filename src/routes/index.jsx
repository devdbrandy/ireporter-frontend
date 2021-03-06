import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from '../components/container/Home';
import Signin from '../components/container/SigninPage';
import AdminDashboardComponent from '../components/container/AdminDashboard';
import DashboardComponent from '../components/view/Dashboard';
import ProfileComponent from '../components/view/Profile';
import SettingsComponent from '../components/view/Settings';
import NewRecordComponent from '../components/view/NewRecord';
import EditRecordComponent from '../components/view/EditRecord';
import BrowseReportsComponent from '../components/view/BrowseReports';
import ProtectedRoute from '../components/container/ProtectedRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomeComponent} exact />
      <Route path="/signin" component={Signin} />
      <ProtectedRoute path="/admin" component={AdminDashboardComponent} />
      <ProtectedRoute path="/dashboard" component={DashboardComponent} />
      <ProtectedRoute path="/profile" component={ProfileComponent} />
      <ProtectedRoute path="/settings" component={SettingsComponent} />
      <ProtectedRoute path="/new/record" component={NewRecordComponent} />
      <ProtectedRoute path="/edit/record/:id" component={EditRecordComponent} />
      <ProtectedRoute path="/browse" component={BrowseReportsComponent} />
    </Switch>
  </Router>
);

export default Routes;
