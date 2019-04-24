/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated) {
        return <Redirect to="/" />;
      }
      return <Component {...props} />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

ProtectedRoute.defaultProps = {
  component: null,
  isAuthenticated: false
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
