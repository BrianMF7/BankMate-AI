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
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
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
