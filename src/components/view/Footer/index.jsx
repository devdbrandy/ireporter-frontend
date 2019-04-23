import React from 'react';
import PropType from 'prop-types';

const Footer = ({ customClass, contentClass }) => (
  <footer className={customClass || 'main--footer'}>
    <div className={contentClass || 'footer--content'}>
      <p className="credit">
        Made with
        {' '}
        <span>
          <i className="fas fa-heart" />
        </span>
        {' '}
        by
        {' '}
        <a href="https://github.com/devdbrandy">Dbrandy</a>
      </p>
      <p>
        Copyright &copy;
        {' '}
        <span id="copyright-year">2018</span>
        {' '}
        iReporter. All Rights Reserved.
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  customClass: PropType.string,
  contentClass: PropType.string,
};

Footer.defaultProps = {
  customClass: '',
  contentClass: '',
};

export default Footer;
