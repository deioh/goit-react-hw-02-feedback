//import React from 'react';

// import { Feedback } from './feedback/Feedback';
// import feedbackData from '../data/Feedback.json';

// export const App = () => {
//   return <Feedback feedbackData={feedbackData} />;
// };

import { Feedback } from './feedback/Feedback';
import feedbackData from '../data/Feedback.json';
import React, { Component } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    count: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    // Destructure the state object to get the current
    // values of good, neutral and bad feedback counters.
    const { good, neutral, bad } = this.state;

    // Call the countTotalFeedback method to get the total number of feedbacks
    // and save it to the total variable.
    const total = this.countTotalFeedback();
    // Array of options for the buttons.
    // Each option is a string representing the type of feedback.
    // The options are 'good', 'neutral', and 'bad'.
    const options = ['good', 'neutral', 'bad'];

    return (
      <>
        <h3>Please leave feedback</h3>
        {/* Map the options array to a list of buttons with key and text content.
        // This will render 3 buttons with the text content "Good", "Neutral", and "Bad".
        // The key prop is required for each item in the array, and the text content
        // is the value of each item in the array.
        */}
        {options.map(option => (
          <button key={option} onClick={() => this.handleClick(option)}>
            {option}
          </button>
        ))}
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />

        {/*
        <div>
          <p>Good: {good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
          <p>Total: {total} </p>
        </div>
        */}

        <Feedback feedbackData={feedbackData} />
        {/* <button onClick={this.handleclick}>«Use this template»</button>  */}
      </>
    );
  }
}
