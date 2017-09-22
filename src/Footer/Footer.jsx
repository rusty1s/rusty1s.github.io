import React from 'react';

import './footer.css';
import github from './github.svg';
import Button from '../components/Button';

const Footer = () => (
  <footer className="footer">
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
      <a href="https://www.github.com/rusty1s">
        <img
          src={github}
          className="github"
          alt="Go to Github"
          title="Go to Github"
        />
      </a>
      <br />
      <span>© {new Date().getFullYear()} Matthias Fey</span>
    </p>
  </footer>
);

export default Footer;
