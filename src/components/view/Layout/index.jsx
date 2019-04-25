import React from 'react';
import Header from '../Header';
// import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* TODO: fix issue with aligning <Footer /> */}
  </>
);

export default Layout;
