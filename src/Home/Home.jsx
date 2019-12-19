import React from 'react';

import styles from './home.css';

import { Grid, GridItem } from '../components/Grid';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';

const Home = () => (
  <div className={styles.main}>
    <Grid wrap center horizontalSpacing="4rem" className={styles.profile}>
      <GridItem>
        <div className={styles.image} />
      </GridItem>
      <GridItem>
        <Title>Matthias Fey</Title>
        <Subtitle>
          PhD student
          <br />
          TU Dortmund University
        </Subtitle>
      </GridItem>
    </Grid>
    <Grid wrap horizontalSpacing="4rem">
      <GridItem grow shrink className={styles.text}>
        <Paragraph>
          {`I'm a third-year PhD student in Machine Learning on graphs at the
          TU Dortmund University. My main area of interest is the generalization
          of Deep Learning methods to arbitrary Euclidean and non-Euclidean
          structured data.`}
        </Paragraph>
        <Paragraph>
          {`I have a formal background in Computer Science (M.Sc 2017, B.Sc. 2013)
          and gathered five years worth of experience at a software company
          during studies.`}
        </Paragraph>
      </GridItem>
      <GridItem grow shrink className={styles.text}>
        <Paragraph>
          {`In my freetime I'm passioned about new web technologies and
          community-driven open-source development. I'm an enthusiast for
          PyTorch, node.js, CSS, React, macOS, Arch Linux and Vim. All my
          contributions can be found at my `}
          <Link href="https://www.github.com/rusty1s">Github</Link>
          {` page.`}
        </Paragraph>
        {/*
        <div className={styles.vitae}>
          <Button containerElement="a" href="">
            Curriculum vitae
          </Button>
        </div>
        */}
      </GridItem>
    </Grid>
  </div>
);

export default Home;
