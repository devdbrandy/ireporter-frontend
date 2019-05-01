import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Panel = ({ title, history, children }) => (
  <>
    <div className="container">
      <main id="main">
        <div className="column">
          <div className="panel">
            <div className="panel--heading">
              <div className="row">
                <h3>{title || 'Panel Title'}</h3>
                <div className="column">
                  <div className="row end">
                    <button
                      type="button"
                      className="btn btn-back"
                      onClick={() => history.goBack()}>
                      <i className="fas fa-reply" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel--body">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
);

Panel.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

Panel.defaultProps = {
  title: '',
};

export default withRouter(Panel);
