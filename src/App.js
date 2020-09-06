import React from "react";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";
import { Global } from "@emotion/core";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import { BrowserRouter as Router } from "react-router-dom";
import { styles } from "./basic-global-styles";

function App() {
  return (
    <Router>
      <Global styles={styles} />
      <Layout>
        <Sidebar />
        <Switch>
          <Route path={"/grid/:columns/:rows"} component={Main} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
