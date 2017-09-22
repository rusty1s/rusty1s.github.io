import React from 'react';
import { NavLink } from 'react-router-dom';

import Link from './Link';

import styles from './nav.css';

const Nav = () => (
  <nav className={styles.main}>
    <ul>
      <li>
        <Link exact to="/" title="Home" component={NavLink} />
      </li>
      <li>
        <Link to="/publications" title="Publications" component={NavLink} />
      </li>
      <li>
        <Link to="/projects" title="Projects" component={NavLink} />
      </li>
      <li>
        <Link to="/teaching" title="Teaching" component={NavLink} />
      </li>
      <li>
        <Link to="/blog" title="Blog" href="https://medium.com/@rusty1s" />
      </li>
    </ul>
  </nav>
);

export default Nav;
