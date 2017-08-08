import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const Nav = () =>
  <nav className="navigation">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/publications" activeClassName="active">
          Publications
        </NavLink>
      </li>
    </ul>
  </nav>;

export default Nav;
