import React from 'react';
import '../styles/navbar.scss';
import logo from '../images/Logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
    </div>
  );
}
