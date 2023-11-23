// Navbar.js

import React from 'react';
import '../css/footer.css';
import veritly_logo from '../images/veritly_logo.png';
import app_store from '../images/app-store.png';
import play_store from '../images/google-play.png';

function Footer() {
  return (
    <div className="footer">

      <div className="footer-logo">
        <img className="logo" src={veritly_logo} alt="logo" />
      </div>

      <div className="quick-links">
        <div className="company-links">
          <h3>Company </h3>
          <ul>
            <li>
              <a href="/"> Home</a>{' '}
            </li>
            <li>
              <a href="/"> About</a>{' '}
            </li>
            <li>
              <a href="/"> Pricing</a>{' '}
            </li>
            <li>
              <a href="/"> Careers</a>{' '}
            </li>
          </ul>
        </div>
        <div className="product-links">
          <h3>Product </h3>
          <ul>
            <li>
              <a href="/"> Certificate Templates</a>{' '}
            </li>
            <li>
              <a href="/"> Features</a>{' '}
            </li>
            <li>
              <a href="/"> Testimonials</a>{' '}
            </li>
            <li>
              <a href="/"> API Integrations </a>{' '}
            </li>
          </ul>
        </div>
        <div className="help-links">
          <h3>Help Center </h3>
          <ul>
            <li>
              <a href="/"> FAQs</a>{' '}
            </li>
            <li>
              <a href="/"> Support</a>{' '}
            </li>
            <li>
              <a href="/"> Contact Us</a>{' '}
            </li>
            <li>
              <a href="/"> API Integrations </a>{' '}
            </li>
          </ul>
        </div>
        <div className="download-links">
          <h3> Download </h3>
          <p>
            Join millions of people around the world and experience the future
            of certificate management and verification
          </p>
          <a href="/" className="play-store">
            {' '}
            <img className="logo" src={play_store} alt="play-store" />{' '}
          </a>
          <a href="/" className="app-store">
            {' '}
            <img className="logo" src={app_store} alt="apple-store" />{' '}
          </a>
        </div>
      </div>
      <hr />
      <div>
        <span> Copyright @2023 Veritly. All Rights Reserved. </span>
        <span> Terms & Conditions ~ Privacy Policy </span>
      </div>
    </div>
  );
}

export default Footer;
