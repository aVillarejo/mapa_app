import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Register from "./views/pages/Register";
// import logo from './logo.svg';
// import "./App.css";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/registro"
            name="Register Page"
            component={Register}
          />
          <Redirect from="/" to="/registro" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
