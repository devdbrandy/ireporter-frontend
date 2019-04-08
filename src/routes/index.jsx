import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/container/Home';
import About from '../components/view/AboutPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default Routes;
