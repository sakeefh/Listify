import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

function SignIn() {
  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission here
  }

  return (
    <div className="SignIn">
      <div className="circle circle--center" />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <button className="submit" type="submit">Sign In</button>
        
      </form>
      
    </div>
  );
}

export default SignIn;
