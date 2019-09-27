import React from "react";

import Home from "../components/Home";
import Header from "../components/layout/Header";

const App = ({ children }) => (
  <div className="App">
    <div className="wrap">
      <Header />
      <div className="container content">{children}</div>
    </div>
  </div>
);

export default App;
