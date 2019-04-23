import React from 'react';

const LoginForm = () => (
  <>
    <form className="signin--form" id="login-form">
      <div>
        <label htmlFor="username">
          Username
          <div className="input-wrapper">
            <input type="text" name="username" placeholder="Enter username" minLength="3" required />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <div className="input-wrapper">
            <input type="password" name="password" placeholder="Enter password" required />
            <i className="fas fa-eye icon toggle-pwd" />
          </div>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
    <div className="signin--links">
      <a href="#!">Forgot Password</a>
    </div>
  </>
);

export default LoginForm;
