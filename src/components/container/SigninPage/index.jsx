/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import PropType from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../../../redux/actions/signUpAction';
import { loginUser } from '../../../redux/actions/authAction';
import Footer from '../../view/Footer';
import LoginForm from '../../view/LoginForm';
import SignupForm from '../../view/SignupForm';

const headerSize = {
  fontSize: '4.8em',
};

const headerSizeSm = {
  fontSize: '2.6em',
};

const Signin = (props) => {
  const [showSignup, setShowSignup] = useState(false);

  const handleFormSwap = () => setShowSignup(!showSignup);

  const { isAuthenticated } = props;
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const { handleLogin, handleSignUp } = props;
  return (
    <>
      <main className="signin">
        <div className="row">
          <section className="signin column center">
            <div className="signin--content column center">
              <Link to="/" className="home-icon"><i className="fas fa-home" /></Link>

              <header className="signin--header">
                <Link to="/">
                  <h2 style={showSignup ? headerSizeSm : headerSize}>
                    <span className="primary-text">i</span>
                    Reporter
                  </h2>
                </Link>
              </header>
              <div id="signin-view" className="row">
                <div className="column center">
                  {
                    showSignup ? <SignupForm handleSignUp={handleSignUp} />
                      : <LoginForm handleLogin={handleLogin} />
                  }
                  <div className="row center">
                    <div className="row signin--or">
                      <span>or</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary open"
                    onClick={handleFormSwap}>
                    { showSignup ? 'Sign In' : 'Create account'}
                  </button>
                </div>
              </div>
            </div>
            <Footer customClass="signin--footer" contentClass="null" />
          </section>
          <section className="showcase column center">
            <div className="showcase--content">
              <h1>
                Let&rsquo;s build the Nation
                {' '}
                <strong>together</strong>
              </h1>
              <h4>
                <span className="primary-text">iReporter</span>
                {' '}
                is a platform for every citizens
              </h4>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

Signin.propTypes = {
  handleLogin: PropType.func.isRequired,
  handleSignUp: PropType.func.isRequired,
  isAuthenticated: PropType.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  handleLogin: payload => loginUser(payload),
  handleSignUp: payload => signUpUser(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
