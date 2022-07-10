// import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ good = 10, neutral = 8, bad = 2, total = 20 }) => {
  return (
    <div className={s.stats}>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <b>Total: {total}</b>
    </div>
  );
};

Statistics.propTypes = {};
