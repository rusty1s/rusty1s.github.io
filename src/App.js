import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Baseline from "./components/Baseline";
import { Grid, GridItem } from "./components/Grid";
import Background from "./Background";
import Nav from "./Nav";
import Home from "./Home";
import Publications from "./Publications";
import Footer from "./Footer";

const App = () =>
  <Router>
    <Baseline>
      <Grid vertical>
        <Background />
        <GridItem>
          <Nav />
        </GridItem>
        <GridItem grow>
          <Route exact path="/" component={Home} />
          <Route path="/publications" component={Publications} />
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </Baseline>
  </Router>;

export default App;
