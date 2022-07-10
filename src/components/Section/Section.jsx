// import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  console.log('props', children);
  return (
    <section className={s.section}>
      <h2>{title}</h2> {children}
    </section>
  );
};

Section.propTypes = {};
