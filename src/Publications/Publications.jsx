import React from 'react';

import styles from './publications.css';
import publications from './publications.json';

import Publication from './Publication';

const Publications = () => (
  <div className={styles.main}>
    {publications.map(p => <Publication key={p.name} {...p} />)}
  </div>
);

export default Publications;
