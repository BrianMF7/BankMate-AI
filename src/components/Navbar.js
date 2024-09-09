import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Buddyfin AI</div>
      <ul className="nav-links">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="mission" smooth={true} duration={500}>
            Mission
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About us
          </ScrollLink>
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
