import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Section.module.css';

export const Section = props => {
  console.log('props', props);
  return <div>{props.children}</div>;
};

Section.propTypes = {};
