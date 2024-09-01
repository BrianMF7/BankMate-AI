import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import First from './components/First';
import VideoBackground from "./components/VideoBackground";
import { ClerkProvider } from '@clerk/clerk-react'



function App() {
  return (
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
    <div className="App">
     <div>

         <Navbar />
      {}
    </div>

    <div>
      <First />
    </div>
    <div>
      <VideoBackground />
    </div>

    </div>
    </ClerkProvider>

       
      
  );
}

export default App;