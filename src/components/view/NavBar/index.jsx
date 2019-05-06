import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { logoutUser } from '../../../redux/actions/authAction';

export const NavBar = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const {
    user: { username },
    logout,
  } = props;

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
                  {/* <i className="fas fa-search" /> */}
                  View reports
                  <span className="text"> By Other users</span>
                </Link>
                <Link to="/new/record" className="btn btn-secondary add-button">
                  <i className="fas fa-plus" />
                  <span className="text">Add a record</span>
                </Link>
                <div className="navbar--icons">
                  <a href="#!" title="notification">
                    <i className="far fa-bell" />
                  </a>
                  <div className="dropdown">
                    <a href="#!" title="dashboard menu" onClick={() => setShowDropDown(!showDropDown)}>
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
                      <a href="#!" id="logout" onClick={logout}>
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
  logout: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = ({
  logout: () => logoutUser(),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
