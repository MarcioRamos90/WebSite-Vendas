import React, { Component } from "react";
import Home from "./site/home";

import "./common/css/style.default.css";
import "./common/css/custom.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
