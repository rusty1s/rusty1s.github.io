import React from "react";

import "./home.css";
import profile from "./profile.png";
import { Grid, GridItem } from "../components/Grid";
import Button from "../components/Button";

const Home = () =>
  <div>
    <Grid wrap className="profile">
      <GridItem>
        <img src={profile} className="profile-img" alt="Profile view" />
      </GridItem>
      <GridItem>
        <h1 className="title">Matthias Fey</h1>
        <h2 className="subtitle">
          PhD candidate<br />University of Dortmund
        </h2>
      </GridItem>
    </Grid>
    <Grid wrap className="about-me">
      <GridItem grow shrink className="text">
        <p>
          I'm a first-year PhD student in Machine Learning on graphs at the
          University of Dortmund. My main area of interest is the generalization
          of Deep Learning methods to arbitrary Euclidean and non-Euclidean
          structured data.
        </p>
        <p>
          I have a formal background in Computer Science (M.Sc 2017, B.Sc. 2013)
          and gathered five years worth of experience at a software company
          during studies.
        </p>
      </GridItem>
      <GridItem grow shrink className="text">
        <p>
          In my freetime I'm passioned about new web technologies and
          community-driven open-source development. I'm an enthusiast for
          node.js, CSS, React, Arch Linux and Vim. All my contributions can be
          found at my <a href="https://www.github.com/rusty1s">Github</a> page.
        </p>
        <div className="button-wrapper">
          <Button
            containerElement="a"
            href="http://rusty1s.github.io/curriculum-vitae/german.pdf"
          >
            Curriculum vitae
          </Button>
        </div>
      </GridItem>
    </Grid>
  </div>;

export default Home;
