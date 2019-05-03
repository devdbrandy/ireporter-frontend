/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated) {
        return <Redirect to="/signin" />;
      }
      return <Component {...props} />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  component: null,
  isAuthenticated: false,
  isAdmin: false,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
