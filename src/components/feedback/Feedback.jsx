// import React from 'react';

export const Feedback = ({ feedbackData }) => {
  return (
    (<h3>dd</h3>),
    (
      <ul>
        {feedbackData.map(Feedback => (
          <li key={Feedback.id}>feedback.name</li>
        ))}
      </ul>
    )
  );
};
