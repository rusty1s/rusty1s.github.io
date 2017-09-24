import React from 'react';

import styles from './teaching.css';
import lectures from './lectures.json';

import Title from '../components/Title';
import Lecture from './Lecture';

const Teaching = () => (
  <div className={styles.main}>
    <Title>Lectures</Title>
    {lectures.map(lecture => (
      <Lecture key={`${lecture.name}-${lecture.year}`} {...lecture} />
    ))}
  </div>
);

export default Teaching;
