import { Route, IndexRoute } from "react-router";
import React from "react";

import App from "./components/App";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default (
  <Route name="app" path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
