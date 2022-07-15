import React from 'react';

import styles from './activities.css';
import visits from './visits.json';
import workshops from './workshops.json';
import conferences from './conferences.json';
import reviews from './reviews.json';

import Title from '../components/Title';
import Visit from './Visit';
import Workshop from './Workshop';
import Conference from './Conference';
import Review from './Review';

const Activities = () => (
  <div className={styles.main}>
    <Title>Research Visits</Title>
    {visits.map(visit => (
      <Visit key={visit.date} {...visit} />
    ))}

    <Title>Workshops</Title>
    {workshops.map(workshop => (
      <Workshop key={workshop.date} {...workshop} />
    ))}

    <Title>Program Committee</Title>
    {reviews.map(review => (
      <Review key={review.date} {...review} />
    ))}

    <Title>Attented Conferences</Title>
    {conferences.map(conference => (
      <Conference key={conference.date} {...conference} />
    ))}
  </div>
);

export default Activities;
