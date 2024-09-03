import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import First from './components/First';
import VideoBackground from "./components/VideoBackground";
import Service from './components/Service';
import Mission from './components/Mission';
import About from './components/About';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_API_KEY}>
      
    <div className="App">
     <div>
         <Navbar/>
    </div>

    <div id="home">
      <First />
    </div>

    <div>
      <VideoBackground/>
    </div>
    <div id="services">
    <Service/>
    </div>
      
    </div>

    <div id="mission">
    <Mission/>

    </div>
    <div id="about">
    <About />

    </div>

    <div>
    <Footer/> 
    </div>

    
    
    </ClerkProvider>
    
  

  );
}

export default App;