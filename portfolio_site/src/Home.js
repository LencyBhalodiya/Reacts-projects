import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Project from "./Project";

function Home() {
  return (
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
    </Switch>
  );
}

export default Home;
