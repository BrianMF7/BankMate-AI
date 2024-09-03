import React , {useState} from 'react';
import './About.css';
import brianImg from './images/brianbfi.png'
import feiImg from './images/febfi.png';
import geoImg from './images/geobfi.png';
import faizanImg from './images/Faizanbfi.png';

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const team = [
      { name: "Brian Martinez Flores", role: "Hi, I like to create websites with React and JS, currently learning Java/Python. Future Data Scientist and I like to be involved with the community, if you need anything, I can build it.", img: brianImg, linkedin: "https://www.linkedin.com/in/brian-martinez-flores/" },
      { name: "Fei Lin", role: "Full stack enthusiast, working my way up towards Software Engineering and Data Scientist. Primarily have skills with Python, Java and JavaScript", img: feiImg, linkedin: "https://www.linkedin.com/in/fei-lincs/" },
      { name: "Geovani Tzul", role:"Aspiring software engineer with a strong interest in full stack development and AI. Skilled in Python, Java, and JavaScript, with experience in backend development", img: geoImg, linkedin: "https://www.linkedin.com/in/geo-tzul/" },
      { name: "Faizan Khan", role: "I am an enthusiastic Computer Science major with a minor in Data Science, With hands-on experience in IT support and software development. I'm eager to bring my programming and problem-solving skills to a software engineering internship.", img: faizanImg, linkedin: "https://www.linkedin.com/in/faizan-khan234/" },
    ];
  
    const handleNext = () => setCurrentIndex((currentIndex + 1) % team.length);
    const handlePrev = () => setCurrentIndex((currentIndex - 1 + team.length) % team.length);
  
    const handleImageClick = () => {
      window.open(team[currentIndex].linkedin, '_blank');
    };
  
    return (
      <div className="about-slider">
        <h1>About Us</h1>
        <div className="slider-container">
          <button onClick={handlePrev} className="prev-btn">‹</button>
          <div className="slide">
            <img 
              src={team[currentIndex].img} 
              alt={team[currentIndex].name} 
              onClick={handleImageClick} 
              style={{ cursor: 'pointer' }}
            />
            <div className="text">
              <h2>{team[currentIndex].name}</h2>
              <p>{team[currentIndex].role}</p>
            </div>
          </div>
          <button onClick={handleNext} className="next-btn">›</button>
        </div>
      </div>
    );
  };
  
  export default About;