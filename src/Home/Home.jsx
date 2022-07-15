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
          Founding Engineer @ kumo.ai
        </Subtitle>
      </GridItem>
    </Grid>
    <Grid wrap horizontalSpacing="4rem">
      <GridItem grow shrink className={styles.text}>
        <Paragraph>
          {`I'm the creator of `}
          <Link href="https://github.com/pyg-team/pytorch_geometric">PyG (PyTorch Geometric)</Link>
          {` and a founding engineer at `}
          <Link href="https://kumo.ai">kumo.ai</Link>{`, working on making
          state-of-the-art Graph Neural Network solutions readily available
          to large-scale data warehouses.
          Previously, I obtained my PhD with highest distinction "cum laude" in
          Machine Learning on graphs from the TU Dortmund University.
          My main area of interest lies in the generalization of Deep Learning methods
          to a wide range of applications related to structured data.`}
        </Paragraph>
      </GridItem>
      <GridItem grow shrink className={styles.text}>
        <Paragraph>
          {`I have a formal background in Computer Science (M.Sc 2017, B.Sc. 2013)
          and gathered five years worth of experience at a software company
          during studies.`}
        </Paragraph>
        <Paragraph>
          {`In my freetime I'm passioned about new technologies and
          community-driven open-source development. I'm an enthusiast for
          PyTorch, node.js, CSS, React, macOS, Arch Linux and Vim. All my
          contributions can be found at my `}
          <Link href="https://www.github.com/rusty1s">GitHub</Link>
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
