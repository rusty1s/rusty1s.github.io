import React from 'react';
import PropTypes from 'prop-types';

import styles from './workshop.css';

import Link from '../components/Link';

const propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const Workshop = props => (
  <div className={styles.main}>
    <div className={styles.name}>
      <Link href={props.href}>{props.name}</Link>
    </div>
    <div>{props.date}</div>
  </div>
);

Workshop.propTypes = propTypes;

export default Workshop;
