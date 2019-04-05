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
        <NavLink to="/activities">Activities</NavLink>
      </li>
      <li>
        <NavLink to="/teaching">Teaching</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
