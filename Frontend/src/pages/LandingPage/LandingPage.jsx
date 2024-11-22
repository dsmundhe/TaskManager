import React from "react";
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();
    
    // Function to navigate to the login page
    const handleLoginClick = () => {
      navigate('/login'); 
    };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1 className="logo">Plan<span>It</span></h1>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        
        {/* Add onClick to the Login button */}
        <button className="login-btn" onClick={handleLoginClick}>Log In</button>
      </nav>

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
