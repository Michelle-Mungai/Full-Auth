import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // handle signup logic here, e.g. send a POST request to the backend to create a new user
    // once signup is successful, redirect to the login page
    navigate('/dashboard');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here, e.g. send a POST request to the backend to authenticate the user
    // once login is successful, redirect to the dashboard page
    navigate('/dashboard');
  };

  return (
    <>
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <input
              type="password"
              name="confirmpswd"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required=""
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose an option...
              </option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button type="submit">Login</button>
            <div className="forgot">
              <Link to='/password' id="forgot-link">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
