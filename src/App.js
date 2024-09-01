import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import First from './components/First';
import VideoBackground from "./components/VideoBackground";
import Service from './components/Service';
import "./App.css";




function App() {
  return (

    
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <First />
      </div>

      <div>
        <VideoBackground />
      </div>

      <Service />

     
    </div>
  );
}

export default App;