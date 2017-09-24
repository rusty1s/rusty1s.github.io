import React from 'react';
import PropTypes from 'prop-types';

import styles from './lecture.css';

import Link from '../components/Link';

const propTypes = {
  name: PropTypes.string.isRequired,
  chair: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Lecture = props => (
  <div className={styles.main}>
    <div className={styles.year}>
      {props.season} {props.year}
    </div>
    <div>
      <Link href={props.href}>{props.name}</Link>
    </div>
    <div className={styles.chair}>
      {props.chair}, {props.professor}
    </div>
  </div>
);

Lecture.propTypes = propTypes;

export default Lecture;
