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
      const { match } = props;
      if (!isAuthenticated) {
        return <Redirect to="/signin" />;
      }
      if (match.path === '/dashboard' && isAdmin) {
        return <Redirect to="/admin" />;
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
  match: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  component: null,
  match: null,
  isAuthenticated: false,
  isAdmin: false,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
});

export default connect(mapStateToProps)(ProtectedRoute);
