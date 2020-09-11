import React from "react";
import GridConfigForm from "./components/grid-config";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Route, Switch } from "react-router-dom";
import Grid from "./components/grid";
import { BrowserRouter as Router } from "react-router-dom";
import { styles } from "./basic-global-styles";
import reducer from "./redux/reducer";

const initialState = {
  latestBlock: [],
  transactions: [],
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Global styles={styles} />
        <Switch>
          <Route exact path={"/"} component={GridConfigForm} />
          <Route exact path={"/grid"} component={Grid} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
