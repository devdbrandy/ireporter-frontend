/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropType from 'prop-types';

const PasswordInput = ({
  name,
  placeholder,
  handleOnChange,
  label,
  labelText,
  pattern,
  title,
  minLength
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label htmlFor={label}>
      {labelText}
      <div className="input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          style={{ borderRight: 0 }}
          onChange={event => handleOnChange(event)}
          required
          pattern={pattern}
          title={title}
          minLength={minLength}
        />
        <i
          className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} icon`}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </label>
  );
};

PasswordInput.propTypes = {
  name: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  handleOnChange: PropType.func.isRequired,
  label: PropType.string,
  labelText: PropType.string,
  pattern: PropType.string,
  title: PropType.string,
  minLength: PropType.string,
};

PasswordInput.defaultProps = {
  label: '',
  labelText: '',
  pattern: null,
  title: null,
  minLength: null,
};

export default PasswordInput;
