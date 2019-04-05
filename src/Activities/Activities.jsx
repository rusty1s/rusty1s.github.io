import React from 'react';

import styles from './activities.css';
import conferences from './conferences.json';
import reviews from './reviews.json';

import Title from '../components/Title';
import Conference from './Conference';
import Review from './Review';

const Activities = () => (
  <div className={styles.main}>
    <Title>Attented Conferences</Title>
    {conferences.map(conference => (
      <Conference key={conference.date} {...conference} />
    ))}

    <Title>Program Committee</Title>
    {reviews.map(review => (
      <Review key={review.date} {...review} />
    ))}
  </div>
);

export default Activities;
