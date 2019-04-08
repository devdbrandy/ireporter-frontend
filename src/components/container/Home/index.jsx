import React from 'react';
import Header from '../../view/Header';
import Footer from '../../view/Footer';

const Home = () => (
  <>
    <nav className="main--navbar home">
      <div className="container">
        <div className="row middle">
          <div className="column">
            <div className="navbar--logo">
              <a href="#!"><span className="primary-text">i</span>Reporter</a>
            </div>
          </div>
          <div className="column">
            <div className="navbar--right row middle sm-hide">
              <a href="signin.html" className="btn btn-primary">sign in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <header className="home--header">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="jumbotron">
              <h1><span className="primary-text">i</span>Reporter</h1>
              <p>
                A platform that encourages users (citizen) to bring any form of corruption to the notice of appropriate authorities and the general public. Report issues affecting the community while also seeking government's quick intervention.
              </p>
              <div className="row md-hide">
                <a href="signin.html" className="btn btn-primary">Sign In</a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="home--signup">
              <form className="home--signup--form" id="signup-form">
                <div className="input-wrapper">
                  <input type="text" placeholder="First name" name="firstname" minLength="3" required />
                </div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Last name" name="lastname" minLength="3" required />
                </div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Phone number" name="phoneNumber" id="phonenumber"
                  minLength="11" required />
                </div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Username" name="username" required />
                </div>
                <div className="input-wrapper">
                  <input type="email" placeholder="Email address" name="email"
                    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    title="The domain portion of the email address is invalid (the portion after the @)."
                    required />
                </div>
                <div className="input-wrapper">
                  <input type="password" placeholder="Password" name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." required />
                    <i className="fas fa-eye icon toggle-pwd" />
                </div>
                <div className="input-wrapper">
                  <input type="password" placeholder="Repeat Password" name="passwordConfirmation" required />
                  <i className="fas fa-eye icon toggle-pwd" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Home;
