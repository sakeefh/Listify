import React from 'react';
import './signin.css';

function SignIn(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onSignIn();
  }

  function handleGoBack() {
    props.onGoBack();
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
        <p> or </p>
        <button className="goback" onClick={handleGoBack}>Go back</button>
      </form>
    </div>
  );
}

export default SignIn;
