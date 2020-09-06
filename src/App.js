import React from "react";
import GridConfigForm from "./components/grid-config";
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
        <Route path={"/config"} component={GridConfigForm} />
        <Route path={"/grid/columns=/:columns/rows=/:rows"} component={Grid} />
        <Redirect to="/config" />
      </Switch>
    </Router>
  );
}

export default App;
