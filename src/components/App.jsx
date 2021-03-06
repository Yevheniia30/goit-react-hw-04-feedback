import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const handleLeaveFeedBack = name => {
    // console.log('e.currenttarget', e.currentTarget);
    // const { name } = e.currentTarget;
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(state);
    return values?.reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const options = Object.keys(state);
  const total = countTotalFeedback();
  const positiveValue = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedBack}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positiveValue={positiveValue}
            />
          ) : (
            <Notification message="There is no feedback yet. You can leave the first one ;)" />
          )}
        </Section>
      </div>
    </div>
  );
};
