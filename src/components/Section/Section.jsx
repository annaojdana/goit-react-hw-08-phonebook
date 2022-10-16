import styles from './Section.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
  const { heading, wrapper } = styles;

  return (
    <section className={wrapper}>
      <h2 className={heading}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
