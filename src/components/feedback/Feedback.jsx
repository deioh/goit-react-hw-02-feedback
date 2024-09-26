// import React from 'react';

export const Feedback = ({ feedbackData }) => {
  return (
    <>
      {/* <h3>Please leave feedback</h3> 
        <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h3>Statistics</h3> */}

      <ul>
        {feedbackData.map(Feedback => (
          <li key={Feedback.id}>feedback.name</li>
        ))}
      </ul>
    </>
  );
};
