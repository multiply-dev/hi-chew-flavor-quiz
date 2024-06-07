import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>{question.question}</h2>
      {question.choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceSelection(index)}
          style={{
            display: 'block',
            margin: '10px 0',
            backgroundColor: selectedChoice === index ? 'blue' : 'white',
            color: selectedChoice === index ? 'white' : 'black',
          }}
        >
          {choice}
        </button>
      ))}
      <button onClick={handleNextClick} disabled={selectedChoice === null}>
        Next Question
      </button>
    </div>
  );
};

export default Question;