import React , {useState} from 'react';
import './First.css';

function First() {
  return (
    <section className="first">
      <div className="content">
        <h2>What is Artificial Intelligence (AI)?</h2>
        <p>
          Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. These machines can perform tasks such as learning, reasoning, problem-solving, and decision-making.
        </p>
        <p>
          AI is a broad field that includes various subfields like machine learning, natural language processing, robotics, and computer vision. It has the potential to revolutionize industries and improve the way we live, work, and interact with the world.
        </p>
        <p>
          From self-driving cars to virtual assistants like Siri and Alexa, AI is already a part of our daily lives and is continuously evolving to offer more advanced solutions.
        </p>
      </div>
    </section>
  );
}

export default First;
