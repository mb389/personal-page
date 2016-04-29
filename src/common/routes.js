import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";
import TravelsPage from "./containers/Travels";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import ResumePage from "./components/Resume";
import error404 from "./components/404";


export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="portfolio" component={PortfolioPage} />
      <Route path="resume" component={ResumePage} />
      <Route path="travels" component={TravelsPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
