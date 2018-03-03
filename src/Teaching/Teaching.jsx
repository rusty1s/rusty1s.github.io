import React from 'react';

import styles from './teaching.css';
import lectures from './lectures.json';
import students from './students.json';

import Title from '../components/Title';
import Lecture from './Lecture';
import Student from './Student';

const Teaching = () => (
  <div className={styles.main}>
    <Title>Lectures</Title>
    {lectures.map(lecture => (
      <Lecture key={`${lecture.name}-${lecture.year}`} {...lecture} />
    ))}

    <Title>Supervised Students</Title>
    {students.map(student => (
      <Student key={`${student.name}-${student.year}`} {...student} />
    ))}
  </div>
);

export default Teaching;
