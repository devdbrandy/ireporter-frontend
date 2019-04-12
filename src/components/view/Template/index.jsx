import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Template = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Template;
