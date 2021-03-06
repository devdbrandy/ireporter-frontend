import React, { useState } from 'react';
import PropType from 'prop-types';
import PasswordInput from '../Inputs/PasswordInput';

const SignupForm = (props) => {
  const initialState = {
    firstname: '',
    lastname: '',
    othernames: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
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
    const { handleSignUp } = props;
    handleSignUp(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="signup--form" id="signup-form">
      <p className="hint">Fill the form below to create an account</p>
      <hr className="dash" />
      <div className="input-wrapper">
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          minLength="3"
          required
          onChange={event => handleFieldChange(event)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          minLength="3"
          required
          onChange={event => handleFieldChange(event)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          name="phoneNumber"
          id="phonenumber"
          placeholder="Phone number"
          minLength="11"
          required
          onChange={event => handleFieldChange(event)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
          onChange={event => handleFieldChange(event)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={event => handleFieldChange(event)}
        />
      </div>
      <PasswordInput
        name="password"
        placeholder="Password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
        minLength="6"
        handleOnChange={event => handleFieldChange(event)}
      />
      <PasswordInput
        name="passwordConfirmation"
        placeholder="Repeat password"
        handleOnChange={event => handleFieldChange(event)}
      />
      <button type="submit" className="btn btn-primary mb-10">Register</button>
    </form>
  );
};

SignupForm.propTypes = {
  handleSignUp: PropType.func.isRequired,
};

export default SignupForm;
