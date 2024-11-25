import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <div className="nav">
        <div className="logo-container">
          <div className="logo-img">
            <a href="https://ibb.co/vPdFGGp">
              <img
                src="https://i.ibb.co/gTW2ppN/logoimg.png"
                alt="logoimg"
                border="0"
              />
            </a>
          </div>
          <h1 className="logo">
            Plan<span>It</span>
          </h1>
        </div>
        <div className="auth-buttons">
          <button className="auth-btn" onClick={handleLoginClick}>
            Log In
          </button>
          <button className="auth-btn su" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h2 className="hero-title typed-text">
            Unlock Your Potential with <br /> <span>PlanIt!</span>
          </h2>
          <p className="hero-subtitle">
            Stay organized, boost your productivity, and achieve your goals
            effortlessly. With the right tools and focus, you can stay on track
            and make progress. Begin today and experience the transformation!
          </p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleLoginClick}>
              Log In
            </button>
            <button className="secondary-btn" onClick={handleSignupClick}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://i.pinimg.com/originals/6b/2c/62/6b2c62861fc38c6422d58eace9f1fa22.gif"
            className="responsive-image rounded"
            alt="Hero"
          />
        </div>
      </header>

      
      {/* Information Section */}
      <section className="info-section">
        <h2 className="section-title">Why Choose PlanIt?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>📋 Task Management</h3>
            <p>
              Easily organize and prioritize tasks to stay on track with
              deadlines and goals.
            </p>
          </div>
          <div className="info-card">
            <h3>🤝 Team Collaboration</h3>
            <p>
              Share tasks and collaborate with your team for seamless
              productivity.
            </p>
          </div>
          <div className="info-card">
            <h3>📈 Productivity Insights</h3>
            <p>
              Gain insights into your performance and improve your work
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">Explore Our Features</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img
              src="https://i.pinimg.com/originals/a3/98/59/a39859d44ad68f19326456c71900eaf6.gif"
              alt="Dashboard"
              className="gallery-image"
            />
            <p className="gallery-caption">Customizable Dashboards</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661387565006-e047eb59fc11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
              alt="Collaboration"
              className="gallery-image"
            />
            <p className="gallery-caption">Team Collaboration Tools</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://i.pinimg.com/originals/a7/e3/52/a7e3528cebe7a13453ef0b49c0610ef9.gif"
              alt="Analytics"
              className="gallery-image"
            />
            <p className="gallery-caption">Productivity Analytics</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started-section">
        <h2 className="get-started-title">Get started with PlanIt today!</h2>
        <div className="get-started-input">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
          />
          <button className="get-started-btn"  onClick={handleSignupClick}>Sign up – it’s free!</button>
        </div>
      </section>

        {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-column">
            <h3>About PlanIt</h3>
            <p>Whats behind the boards.</p>
          </div>
          <div className="footer-column">
            <h3>Jobs</h3>
            <p>Learn about open roles on the PlanIt team.</p>
          </div>
          <div className="footer-column">
            <h3>Apps</h3>
            <p>Download the PlanIt App for your Desktop or Mobile devices.</p>
          </div>
          <div className="footer-column">
            <h3>Contact us</h3>
            <p>Need anything? Get in touch and we can help.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-language">
            <p>English</p>
          </div>
          <div className="footer-links">
            <a href="#">Notice at Collection</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2024 PlanIt</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
