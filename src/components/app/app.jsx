import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import Register from "../user/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
