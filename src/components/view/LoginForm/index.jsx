/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropType from 'prop-types';
import PasswordInput from '../Inputs/PasswordInput';

const LoginForm = (props) => {
  const initialState = {
    username: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { handleLogin } = props;
    handleLogin(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signin--form" id="login-form">
        <div>
          <label htmlFor="username">
            Username
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                minLength="3"
                required
                onChange={e => handleFieldChange(e)}
              />
            </div>
          </label>
        </div>
        <div>
          <PasswordInput
            name="password"
            placeholder="Enter password"
            handleOnChange={handleFieldChange}
            label="password"
            labelText="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <div className="signin--links">
        <a href="#!">Forgot Password</a>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  handleLogin: PropType.func.isRequired,
};

export default LoginForm;
