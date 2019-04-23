/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../view/Footer';
import LoginForm from '../../view/LoginForm';
import SignupForm from '../../view/SignupForm';

const headerSize = {
  fontSize: '4.8em',
};

const headerSizeSm = {
  fontSize: '2.6em',
};

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignup: false,
    };
  }

  handleFormSwap = () => {
    const { showSignup } = this.state;
    this.setState({ showSignup: !showSignup });
  }

  render() {
    const { showSignup } = this.state;
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
                    {showSignup ? <SignupForm /> : <LoginForm />}
                    <div className="row center">
                      <div className="row signin--or">
                        <span>or</span>
                      </div>
                    </div>
                    <button type="button"
                      className="btn btn-secondary open"
                      onClick={this.handleFormSwap}>
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
  }
}

export default Signin;
