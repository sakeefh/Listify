import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import image from './images/logo.png';
import SignUp from './signup';
import SignIn from './signin';
import Main from './main';

function App() {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState('');
  const [hideHeader, setHideHeader] = useState(false);
  const [showMain, setShowMain] = useState(false);

  function handleSignIn() {
    setShowCircle(true);
    setHideHeader(true);
    setCircleColor('pink');
  }

  function handleSignUp() {
    setShowCircle(true);
    setCircleColor('purple');
    setHideHeader(true);
  }

  function handleShowMain() {
    setShowCircle(false);
    setHideHeader(true);
  }

  function handleGoBack() {
    setShowCircle(false);
    setHideHeader(false);
    setShowSignIn(true);
    setShowSignUp(true);
  }

  function handleLogout() {
    setHideHeader(false);
    setShowMain(true);
  }

  return (
    <Router>
      <div className="App">
        {!hideHeader && (
          <>
            <div className="circle circle--bottom-left" />
            <div className="circle circle--top-right" />
            <img className="logo" src={image} alt="Logo" />
            <h1>Listify</h1>
            <nav>
            <ul>
              <li>
                <button className="signin" onClick={handleSignIn}>
                <Link to="/signin">Sign In </Link>
                </button>
              </li>
              <p>or</p>
              <li>
                <button className="signup" onClick={handleSignUp}>
                  <Link to="/signup">Sign Up </Link>
                </button>
              </li>
            </ul>
          </nav>
          </>
        )}
        <Routes>
        <Route path="/signin" element={<SignIn handleGoBack={handleGoBack} handleShowMain={handleShowMain} />} />
        <Route path="/signup" element={<SignUp handleGoBack={handleGoBack} handleShowMain={handleShowMain} />} />
          <Route path="/main" element={<Main handleLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
