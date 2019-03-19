import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Register from "./views/pages/Register";
import Login from "./views/pages/Login";
// import logo from './logo.svg';
// import "./App.css";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route
            exact
            path="/registro"
            name="Register Page"
            component={Register}
          />
          {/* <Redirect from="/" to="/registro" /> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
