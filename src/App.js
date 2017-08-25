import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";
import { Grid, GridItem } from "./components/Grid";
import Background from "./Background";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Publications from "./Publications";
import Projects from "./Projects";

const App = () =>
  <Router>
    <Grid vertical className="app">
      <Background />
      <GridItem className="wrapper">
        <Nav />
      </GridItem>
      <GridItem grow className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/publications" component={Publications} />
        <Route path="/projects" component={Projects} />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Router>;

export default App;
