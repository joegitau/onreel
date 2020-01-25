import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import Movie from "./Movies/Movie";
import Movies from "./Movies/Movies";
import NotFound from "./NotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
