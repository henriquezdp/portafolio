import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h1> Diego Henríquez</h1>
      </div>
      <div className="contacto-container">
        <h3>Contáctame</h3>
      </div>
      <div className="footer-sns">
        <div className="diseñado">Diseñado por Diego Henríquez</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
