import React from 'react';
import PropTypes from 'prop-types';

import styles from './conference.css';

import Link from '../components/Link';

const propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const Review = props => (
  <div className={styles.main}>
    <div className={styles.name}>
      <Link href={props.href}>{props.name}</Link>
    </div>
    <div>{`${props.date} in ${props.city}`}</div>
  </div>
);

Review.propTypes = propTypes;

export default Review;
