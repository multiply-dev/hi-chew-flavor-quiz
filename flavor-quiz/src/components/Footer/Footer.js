import React from 'react';
import footerImage from '../../assets/Footer.png';
import logo from '../../assets/Logo.png';

import './Footer.css'

const Header = () => {
  return (
    <footer className="footer">
      <div className="footer-image-container">
        <img src={footerImage} alt="Footer" className="footer-image" />
      </div>
    </footer>
  );
};

export default Header;