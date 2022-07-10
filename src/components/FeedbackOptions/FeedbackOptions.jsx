// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = props => {
  return (
    <>
      <button className={s.btn + ' ' + s.good}>Good</button>
      <button className={s.btn + ' ' + s.bad}>Bad</button>
      <button className={s.btn + ' ' + s.neutral}>Neutral</button>
    </>
  );
};

FeedbackOptions.propTypes = {};
