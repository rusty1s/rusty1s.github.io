import React from 'react';

import styles from './footer.css';

import Button from '../components/Button';
import IconLink from '../components/IconLink';

const Footer = () => (
  <footer className={styles.main}>
    <address className={styles.address}>
      <Button containerElement="a" href="mailto:matthias.fey@tu-dortmund.de">
        Get in touch
      </Button>
      <br />
      <span className={styles.email}>matthias.fey [at] tu-dortmund.de</span>
      <br />
      <span>Computer Science VII, University of Dortmund</span>
      <br />
      <span>Otto-Hahn-Str. 16, D-44227 Dortmund, Germany</span>
      <br />
      <IconLink
        href="https://www.github.com/rusty1s"
        icon="github"
        title="Go to Github"
      />
      <br />
      <span>© {new Date().getFullYear()} Matthias Fey</span>
    </address>
  </footer>
);

export default Footer;
