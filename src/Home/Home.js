import React from 'react';

import styles from './home.css';

import { Grid, GridItem } from '../components/Grid';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const Home = () => (
  <div className={styles.main}>
    <Grid wrap>
      <GridItem>
        <div className={styles.image} />
      </GridItem>
      <GridItem>
        <Title>Matthias Fey</Title>
        <Subtitle>
          PhD candidate
          <br />
          University of Dortmund
        </Subtitle>
      </GridItem>
    </Grid>
    <Grid wrap>
      <GridItem grow shrink className="text">
        <Paragraph>
          {`I'm a first-year PhD student in Machine Learning on graphs at the
          University of Dortmund. My main area of interest is the generalization
          of Deep Learning methods to arbitrary Euclidean and non-Euclidean
          structured data.`}
        </Paragraph>
        <Paragraph>
          {`I have a formal background in Computer Science (M.Sc 2017, B.Sc. 2013)
          and gathered five years worth of experience at a software company
          during studies.`}
        </Paragraph>
      </GridItem>
      <GridItem grow shrink className="text">
        <Paragraph>
          {`In my freetime I'm passioned about new web technologies and
          community-driven open-source development. I'm an enthusiast for
          node.js, CSS, React, Arch Linux and Vim. All my contributions can be
          found at my `}
          <a href="https://www.github.com/rusty1s">Github</a>
          {` page.`}
        </Paragraph>
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
  </div>
);

export default Home;
