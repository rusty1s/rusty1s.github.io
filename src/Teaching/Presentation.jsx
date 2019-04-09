import React from 'react';
import PropTypes from 'prop-types';

import styles from './presentation.css';

import Link from '../components/Link';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

const Presentation = props => (
  <div className={styles.main}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.subtitle}>
      {props.subtitle} <span className={styles.date}>{`(${props.date})`}</span>
    </div>
    <div>[<Link href={props.href}>{`PDF (${props.size})`}</Link>]</div>
  </div>
);

Presentation.propTypes = propTypes;

export default Presentation;

