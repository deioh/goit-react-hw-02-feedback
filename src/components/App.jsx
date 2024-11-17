//import React from 'react';

// import { Feedback } from './feedback/Feedback';
// import feedbackData from '../data/Feedback.json';

// export const App = () => {
//   return <Feedback feedbackData={feedbackData} />;
// };

// import { Feedback } from './feedback/Feedback';
// import feedbackData from '../data/Feedback.json';

// import { type } from '@testing-library/user-event/dist/type';

import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    count: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total > 0) {
      return total;
    } else {
      return 'No feedback given';
    }
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onleaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </Section>

        {/* <Feedback feedbackData={feedbackData} /> */}
        {/* <button onClick={this.handleclick}>«Use this template»</button>  */}
      </>
    );
  }
}
