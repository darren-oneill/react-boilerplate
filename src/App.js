import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./containers/Home";
import { GlobalStyle } from "./styling/globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
