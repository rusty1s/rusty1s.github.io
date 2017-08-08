import React from "react";

import "./footer.css";
import github from "./github.svg";

const Footer = () =>
  <footer className="footer">
    <a href="mailto:matthias.fey@tu-dortmund.de">Get in touch</a>
    <p>
      <div>matthias [dot] fey [at] tu-dortmund [dot] de</div>
      <div>Computer Science VII, University of Dortmund</div>
      <div>Otto-Hahn-Str. 16, D-44227 Dortmund, Germany</div>
      <img src={github} className="github" />
      <div>
        © {new Date().getFullYear()} Matthias Fey
      </div>
    </p>
  </footer>;

export default Footer;
