import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

function SignUp(props) {
  const navigate = useNavigate();

function handleSubmit(event) {
  event.preventDefault();
  props.handleShowMain();
  navigate('/main');
}

  function handleGoBack() {
    props.handleGoBack();
  }

  return (
    <div className="SignUp">
      <div className="circle circle--center" />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <button className = "submitsign" type="submit">Sign Up</button>
        <p> or </p>
        <button className="goback" onClick={() => handleGoBack()}><Link className="goback" to="/">Go back</Link></button>
      </form>
      
    </div>
  );
}

export default SignUp;
