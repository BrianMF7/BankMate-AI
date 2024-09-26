import React , {useState} from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footerMain">
      <ul className="menu">
        <li className="menu__item align-items-center"><a className="menu__link" href="#home">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#services">Service</a></li>
        <li className="menu__item"><a className="menu__link" href="#mission">Mission</a></li>
        <li className="menu__item"><a className="menu__link" href="#about">About Us</a></li>
      </ul>
      <p>&copy; BankMate AI </p>
    </footer>
  );
  
  export default Footer;