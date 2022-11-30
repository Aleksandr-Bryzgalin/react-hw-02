import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  clickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  clickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const arrayOfValues = Object.values(this.state);
    return arrayOfValues.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGood={this.clickGood}
            onNeutral={this.clickNeutral}
            onBad={this.clickBad}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              valueGood={good}
              valueNeutral={neutral}
              valueBad={bad}
              valueTotal={total}
              valuePosFee={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
