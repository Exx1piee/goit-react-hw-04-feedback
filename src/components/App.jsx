import { useState } from 'react';
import { Statistic } from './Statistics/statistics';
import { Feedback } from './FeedbackOptions/feedbackoptions';
import { Section } from './Section/section';
import { Notfication } from './Notifications/notifications';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please leave your feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        ></Feedback>
        {total > 0 ? (
          <Statistic
            bad={bad}
            good={good}
            neutral={neutral}
            total={total}
            percentage={percentage}
          ></Statistic>
        ) : (
          <Notfication message="No feedback given"></Notfication>
        )}
      </Section>
    </div>
  );
};