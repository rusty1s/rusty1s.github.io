import React from 'react';

import styles from './publications.css';

import Publication from './Publication';
import publications from './publications.json';

const Publications = () => (
  <div className={styles.main}>
    {publications.map(p => <Publication key={p.name} {...p} />)}
  </div>
);

export default Publications;
