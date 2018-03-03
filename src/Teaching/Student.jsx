import React from 'react';
import PropTypes from 'prop-types';

import styles from './student.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
};

const Student = props => (
  <div className={styles.main}>
    <div className={styles.name}>{props.name}</div>
    <div>{props.author}</div>
    <div className={styles.description}>
      {props.isMaster ? "Master's" : "Bachelor's"} Thesis ({props.year})
    </div>
  </div>
);

Student.propTypes = propTypes;

export default Student;

