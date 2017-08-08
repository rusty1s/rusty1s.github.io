import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Background from "./Background";
import Nav from "./Nav";
import Home from "./Home";
import Publications from "./Publications";

const App = () =>
  <Router>
    <div>
      <Background />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/publications" component={Publications} />
    </div>
  </Router>;

export default App;
