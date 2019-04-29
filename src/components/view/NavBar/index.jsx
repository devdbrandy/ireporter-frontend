import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';

export const NavBar = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { user: { username } } = props;

  return (
    <>
      <nav className="main--navbar">
        <div className="container">
          <div className="row middle">
            <div className="navbar--logo">
              <Link to="/">
                <span className="primary-text">i</span>
                REPORTER
              </Link>
            </div>
            <div className="column">
              <div className="navbar--right row middle">
                <Link to="/browse" className="btn btn-secondary">
                  <i className="fas fa-search" />
                  Browse
                  <span className="text"> Records</span>
                </Link>
                <Link to="/" className="btn btn-secondary add-button">
                  <i className="fas fa-plus" />
                  <span className="text">Add a record</span>
                </Link>
                <div className="navbar--icons">
                  <a href="#!" title="notification">
                    <i className="far fa-bell" />
                  </a>
                  <div className="dropdown" onClick={() => setShowDropDown(!showDropDown)}>
                    <a href="#!" title="dashboard menu">
                      <i className="fa fa-th" />
                    </a>
                    <div
                      className={`dropdown--menu ${showDropDown ? 'show' : ''}`}>
                      <span>Account</span>
                      <Link to="/dashboard">
                        <i className="fas fa-tachometer-alt" />
                        Dashboard
                      </Link>
                      <Link to="/profile">
                        <i className="far fa-user" />
                        Profile
                      </Link>
                      <Link to="/settings">
                        <i className="fas fa-cog" />
                        Settings
                      </Link>
                      <hr />
                      <span>Session</span>
                      <a href="#!" id="logout">
                        <i className="fas fa-sign-out-alt" />
                        Sign Out
                        <span className="username">
                          (
                          {username}
                          )
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  user: PropType.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(NavBar);
