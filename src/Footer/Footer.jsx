import React from 'react';

import styles from './footer.css';
import github from './github.svg';
import Button from '../components/Button';
import Link from '../components/Link';

const Footer = () => (
  <footer className={styles.main}>
    <Button containerElement="a" href="mailto:matthias.fey@tu-dortmund.de">
      Get in touch
    </Button>
    <p>
      <span className="email">matthias.fey [at] tu-dortmund.de</span>
      <br />
      <span>Computer Science VII, University of Dortmund</span>
      <br />
      <span>Otto-Hahn-Str. 16, D-44227 Dortmund, Germany</span>
      <br />
      <Link href="https://www.github.com/rusty1s">
        <img
          src={github}
          className="github"
          alt="Go to Github"
          title="Go to Github"
        />
      </Link>
      <br />
      <span>© {new Date().getFullYear()} Matthias Fey</span>
    </p>
  </footer>
);

export default Footer;
