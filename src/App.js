import React from "react";
import Sidebar from "./components/sidebar";
import { Global } from "@emotion/core";
import { Route, Switch, Redirect } from "react-router-dom";
import Grid from "./components/grid";
import { BrowserRouter as Router } from "react-router-dom";
import { styles } from "./basic-global-styles";

function App() {
  return (
    <Router>
      <Global styles={styles} />
      <Switch>
        <Sidebar path={"/config"} />
        <Route path={"/grid/columns=/:columns/rows=/:rows"} component={Grid} />
        <Redirect to="/config" />
      </Switch>
    </Router>
  );
}

export default App;
