import React , {useState} from 'react';
import "./Mission.css";

const Mission = () => {
    return (
      <>
        <section className="parallax-container">
          <h1 class="missionTitle">Mission</h1>
          <p class="missionInfo">
          BankMate AI started from an idea of ours from being in the fellowship program at Headstarter AI. It would be beneficial for society to have something that can empower them to control their financial future. Our AI isn't just a tool—it's your buddy, guiding you to create responsible money habits. From recommending the top 10 stocks in the daily market to offering advice on bonds, savings accounts, and passive income, BankMate AI provides personalized insights right from our chat. We are here to help you learn how to save, make, and invest money wisely, leading to a brighter financial future.
          </p>

          <p class = "disclaimerInfo">
          Disclaimer: BankMate AI provides financial recommendations, however, we are not responsible for any financial losses. Remember, the final decision is always yours. Be smart, carefully consider your options, and seek professional advice when necessary. Use BankMate AI as a guide, but make sure to do your own research and invest responsibly.
          </p>
        </section>
  
      </>
    );
  };
  
  export default Mission;