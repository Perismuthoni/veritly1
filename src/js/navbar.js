import React from 'react';
import '../css/navbar.css';
import veritly_logo from '../images/veritly_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-logo">
        <img className="logo" src={veritly_logo} alt="logo" />
      </div>

      <div className="pages">
        <a href="/"> Product </a>
        <a href="/"> Pricing </a>
        <a href="/"> Company </a>
        <a href="/"> Resources </a>
        <a href="/"> Contact </a>
      </div>

      <div className="call-to-action">
        <a href="/"> Login </a>
        <a href="/">
         
          <button className="start-btn" >  Get started </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
