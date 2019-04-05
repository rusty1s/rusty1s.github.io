import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Grid, GridItem } from './components/Grid';
import Background from './Background';
import Nav from './Nav';
import Footer from './Footer';

import Home from './Home';
import Publications from './Publications';
import Activities from './Activities';
import Teaching from './Teaching';

const App = () => (
  <Router>
    <Grid vertical>
      <Background />
      <GridItem>
        <Nav />
      </GridItem>
      <GridItem grow>
        <Route exact path="/" component={Home} />
        <Route path="/publications" component={Publications} />
        <Route path="/activities" component={Activities} />
        <Route path="/teaching" component={Teaching} />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Router>
);

export default App;
