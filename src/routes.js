import { Route, IndexRoute } from "react-router";
import React from "react";

import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default (
  <Route name="app" path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);
