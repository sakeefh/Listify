import React, { useState } from 'react';
import './App.css';
import image from './images/logo.png';
import SignUp from './signup';
import SignIn from './signin';
import Main from './main';
import './main.css';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState('');
  const [hideHeader, setHideHeader] = useState(false);
  const [showMain, setShowMain] = useState(false);

  function handleSignIn() {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowCircle(true);
    setHideHeader(true);
    setCircleColor('pink');
  }

  function handleSignUp() {
    setShowSignIn(false);
    setShowSignUp(true);
    setShowCircle(true);
    setCircleColor('purple');
    setHideHeader(true);
  }

  function handleShowMain() {
    setShowMain(true);
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCircle(false);
    setHideHeader(true);
  }

  return (
    <div className="App">
      {!hideHeader && (
        <>
          <div className="circle circle--bottom-left" />
          <div className="circle circle--top-right" />
          <img class="logo" src={image} alt="Logo" />
          <h1>Listify</h1>
          <button className="signin" onClick={handleSignIn}>
            Sign In
          </button>
          <p>or</p>
          <button className="signup" onClick={handleSignUp}>
            Sign Up
          </button>
        </>
      )}

      {showSignIn && <SignIn />}
      {showSignUp && <SignUp />}
      {!showSignIn && !showSignUp && !showMain && (
        <button class = 'main' onClick={handleShowMain}>Main</button>
      )}
      {showMain && <Main />}
      {showCircle && (
        <div
          className="circle circle--center"
          style={{ backgroundColor: circleColor }}
        />
      )}
    </div>
  );
}

export default App;
