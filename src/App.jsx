import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Grid, GridItem } from './components/Grid';
import Nav from './Nav';
import Footer from './Footer';

import Home from './Home';
import Publications from './Publications';
import Projects from './Projects';
import Teaching from './Teaching';

const App = () => (
  <Router>
    <Grid vertical>
      <GridItem>
        <Nav />
      </GridItem>
      <GridItem grow>
        <Route exact path="/" component={Home} />
        <Route path="/publications" component={Publications} />
        <Route path="/projects" component={Projects} />
        <Route path="/teaching" component={Teaching} />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Router>
);

export default App;
