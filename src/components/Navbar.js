import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Buddyfin AI</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#services">Services</Link>
        </li>
        <li>
          <Link to="/#mission">Mission</Link>
        </li>
        <li>
          <Link to="/#about">About us</Link>
        </li>
        <li>
          <Link to="/chatbot">Chat Bot</Link>
        </li>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>
    </nav>
  );
}

export default Navbar;
