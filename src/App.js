import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import First from './components/First';
import VideoBackground from "./components/VideoBackground";
import { ClerkProvider } from '@clerk/clerk-react';




function App() {
  return (
    <ClerkProvider
      publishableKey={process.env.REACT_APP_CLERK_API_KEY}>
    <div className="App">
     <div>

         <Navbar />
      {}
    </div>

    <div>
      <First />
      {}
    </div>
    <div>
      <VideoBackground />
    </div>
    </div>
    </ClerkProvider>

       
      
  );
}

export default App;
