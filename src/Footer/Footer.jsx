import React from 'react';

import styles from './footer.css';

import Button from '../components/Button';
import IconLink from '../components/IconLink';
import Icon from '../components/Icon';

const Footer = () => (
  <footer className={styles.main}>
    <address className={styles.address}>
      <div>
        <Button containerElement="a" href="mailto:matthias.fey@tu-dortmund.de">
          Get in touch
        </Button>
      </div>
      <div className={styles.email}>matthias.fey [at] tu-dortmund.de</div>
      <div>Computer Science VII, TU Dortmund University</div>
      <div>Otto-Hahn-Str. 16, D-44227 Dortmund, Germany</div>
      <div className={styles.icons}>
        <IconLink href="https://www.github.com/rusty1s" title="Go to Github">
          <Icon name="github" big />
        </IconLink>
        <IconLink href="https://twitter.com/rusty1s" title="Go to Twitter">
          <Icon name="twitter" big />
        </IconLink>
        <IconLink href="https://medium.com/@rusty1s" title="Go to Medium">
          <Icon name="medium" big />
        </IconLink>
      </div>
      <div>© {new Date().getFullYear()} Matthias Fey</div>
    </address>
  </footer>
);

export default Footer;
