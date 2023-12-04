import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.username) {
      formIsValid = false;
      errors['username'] = 'Username cannot be empty';
    }

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors['email'] = 'Please enter a valid email';
    }

    if (!formData.password) {
      formIsValid = false;
      errors['password'] = 'Password cannot be empty';
    }

    if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      errors['confirmPassword'] = 'Passwords do not match';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform signup action
      console.log('Form submitted:', formData);
      // You can add logic to send data to backend for signup process
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors['username']}</span>

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors['email']}</span>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors['password']}</span>

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors['confirmPassword']}</span>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;