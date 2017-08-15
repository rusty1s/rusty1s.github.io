import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";
import Baseline from "./components/Baseline";
import { Grid, GridItem } from "./components/Grid";
import Background from "./Background";
import Nav from "./Nav";
import Home from "./Home";
import Publications from "./Publications";
import Footer from "./Footer";

const App = () =>
  <Router>
    <Grid vertical>
      <Background />
      <GridItem className="wrapper">
        <Nav />
      </GridItem>
      <GridItem grow className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/publications" component={Publications} />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Router>;

export default App;
