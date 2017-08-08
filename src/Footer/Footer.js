import React from "react";

import "./footer.css";
import github from "./github.svg";
import Button from "../components/Button";

const Footer = () =>
  <footer className="footer">
    <Button containerElement="a" href="mailto:matthias.fey@tu-dortmund.de">
      Get in touch
    </Button>
    <p>
      <div>matthias [dot] fey [at] tu-dortmund [dot] de</div>
      <div>Computer Science VII, University of Dortmund</div>
      <div>Otto-Hahn-Str. 16, D-44227 Dortmund, Germany</div>
      <a href="https://www.github.com/rusty1s">
        <img src={github} className="github" />
      </a>
      <div>
        © {new Date().getFullYear()} Matthias Fey
      </div>
    </p>
  </footer>;

export default Footer;
