import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* TODO: fix issue with aligning <Footer /> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
};

export default Layout;
