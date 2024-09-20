//import React from 'react';

// import { Feedback } from './feedback/Feedback';
// import feedbackData from '../data/Feedback.json';

// export const App = () => {
//   return <Feedback feedbackData={feedbackData} />;
// };

import { Feedback } from './feedback/Feedback';
import feedbackData from '../data/Feedback.json';
import React, { Component } from 'react';

export class App extends Component {
  handleclick = () => {
    console.log('click');
  };

  render() {
    return (
      <>
        <Feedback feedbackData={feedbackData} />
        <button onClick={this.handleclick}>«Use this template»</button>
      </>
    );
  }
}
