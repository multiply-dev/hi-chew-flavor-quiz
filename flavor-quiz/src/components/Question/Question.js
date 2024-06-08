import React, { useState, useEffect } from 'react';

import './Question.css';

const Question = ({ question, onAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  // Note that choice here is either 0, 1, or 2
  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
  };

  const handleNextClick = () => {
    if (selectedChoice !== null) {
      onAnswer(selectedChoice);
      setSelectedChoice(null); // Reset selectedChoice after answering
    }
  };

  useEffect(() => {
    setSelectedChoice(null); // Reset selectedChoice when question changes
  }, [question]);

  return (
    <div className='question-container'>
      <svg viewBox="0 0 400 40" width="400" height="40">
        <text x="55" y="30" fill="white" font-size="40" font-weight="900" stroke="white" stroke-width="3" letter-spacing="2">
          <tspan x="55" y="30">DESSERT MIX</tspan>
        </text>
        <text x="55" y="30" fill="#FF6F89" font-size="40" font-weight="900" letter-spacing="2">
          <tspan x="55" y="30">DESSERT MIX</tspan>
        </text>
      </svg>
      <h1 className='title-text'>personality quiz</h1>
      <h1 className='progress-text'>{question.id}/12</h1>
      <h1 className='question-text'>{question.question}</h1>
      <div className="choices-container">
        {question.choices.map((choice, index) => (
          <button
            className={selectedChoice === index ? 'choice-button selected' : 'choice-button'}
            key={index}
            onClick={() => handleChoiceSelection(index)}
          >
            {choice}
          </button>
        ))}
      </div>
      <button 
        className="next-button"
        disabled={selectedChoice === null}
        onClick={handleNextClick}
      >
        Next Question
      </button>
    </div>
  );
};

export default Question;