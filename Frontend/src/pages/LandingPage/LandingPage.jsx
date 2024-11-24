import React from "react";
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();
    
    // Function to navigate to the login page
    const handleLoginClick = () => {
      navigate('/login'); 
    };

    // Function to navigate to the signup page
    const handleSignupClick = () => {
      navigate('/signup'); 
    };

  return (
    <div className="landing-page">
       <div className="logo-container">
    <h1 className="logo">
      Plan<span>It</span>
    </h1>
  </div>
  
      <div className="auth-buttons">
        <button className="auth-btn" onClick={handleLoginClick}>Log In</button>
        <button className="auth-btn" onClick={handleSignupClick}>Sign Up</button>
      </div>

      <header className="hero">
        <h2 className="typing-effect">
          <span className="line-1"> Unlock your potential </span>
          <br />
          <span className="line-2">turn <span>  tasks into triumphs and achieve more!</span> </span>
        </h2>

        <p>
          Every great achievement begins with a single step. Take yours
          <strong> Today!</strong>
        </p>
        <div className="cta">
          <input type="email" placeholder="Your email address" />
          <button className="cta-btn">View as a Guest</button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
