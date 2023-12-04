import React, { useState } from 'react';
import './Signin.css'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Navi=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    const errors = {};
    if (!email || !email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!password || password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    if (Object.keys(errors).length === 0) {
      setIsAuthenticated(true)
    } else {
      setErrors(errors);
    }
    if(isAuthenticated)
    {
      Navi('/home');
    }
  };

  return (
    <div className='div1'>
    <div className="signin" >
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button type="submit" >Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
