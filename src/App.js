import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import Navbar from "./components/Navbar";
import First from "./components/First";
import VideoBackground from "./components/VideoBackground";
import Service from "./components/Service";
import Mission from "./components/Mission";
import About from "./components/About";
import Footer from "./components/Footer";
import ChatComponent from "./components/ChatComponent";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_API_KEY}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<>
              <div id="home">
                <First />
              </div>
              <VideoBackground />
              <div id="services">
                <Service />
              </div>
              <div id="mission">
                <Mission />
              </div>
              <div id="about">
                <About />
              </div>
              <Footer />
            </>} />
            <Route path="/chatbot" element={<ChatComponent />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
