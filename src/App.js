import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Baseline from "./components/Baseline";
import Background from "./Background";
import Nav from "./Nav";
import Home from "./Home";
import Publications from "./Publications";
import Footer from "./Footer";

const App = () =>
  <Router>
    <Baseline>
      <Background />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/publications" component={Publications} />
      <Footer />
    </Baseline>
  </Router>;

export default App;
