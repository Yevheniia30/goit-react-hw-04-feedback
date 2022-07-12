import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveValue }) => {
  // console.log(
  //   'good, neutral, bad, total, positiveValue',
  //   good,
  //   neutral,
  //   bad,
  //   total,
  //   positiveValue
  // );
  return (
    <div className={s.stats}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p className={s.bold}>Total: {total}</p>
      <p className={s.bold}>Positive feedback: {positiveValue}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveValue: PropTypes.number.isRequired,
};
