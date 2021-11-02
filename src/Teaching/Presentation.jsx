import React from 'react';
import PropTypes from 'prop-types';

import styles from './presentation.css';

import Link from '../components/Link';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  pdfHref: PropTypes.string.isRequired,
  pdfSize: PropTypes.string.isRequired,
};

const Presentation = props => (
  <div className={styles.main}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.subtitle}>
      {props.subtitle} <span className={styles.date}>{`(${props.date})`}</span>
    </div>
    <div>[
      <Link href={props.href}>Link</Link>
      {props.pdfHref &&
      <span>, <Link href={props.pdfHref}>{`PDF (${props.pdfSize})`}</Link></span>
      }]
    </div>
  </div>
);

Presentation.propTypes = propTypes;

export default Presentation;

