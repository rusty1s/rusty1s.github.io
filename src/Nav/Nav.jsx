import React from 'react';

import NavLink from '../components/NavLink';

import styles from './nav.css';

const Nav = () => (
  <nav className={styles.main}>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/publications">Publications</NavLink>
      </li>
      <li>
        <NavLink to="/teaching">Teaching</NavLink>
      </li>
      <li>
        <NavLink containerElement="a" href="https://medium.com/@rusty1s">
          Blog
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
