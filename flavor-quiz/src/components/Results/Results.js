import React from 'react';

const Results = ({ answers }) => {

  console.log('answers', answers)
  const tallyResults = () => {
    const counts = {};
    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    return counts;
  };

  const results = tallyResults();
  const mostCommonAnswer = Object.keys(results).reduce((a, b) =>
    results[a] > results[b] ? a : b
  );

  return (
    <div>
      <h2>Your Result</h2>
      <p>You selected "{mostCommonAnswer}" the most.</p>
    </div>
  );
};

export default Results;