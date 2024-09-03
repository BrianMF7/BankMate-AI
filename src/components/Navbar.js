import React , {useState} from 'react';
import './Navbar.css';
import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Buddyfin AI</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#about">About us</a></li>


          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
      </ul>
    </nav>
  );
}

export default Navbar;
