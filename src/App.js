import React, { Component, Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main">
          <SideBar />
          <div className="main-container">hello</div>
        </div>
      </Fragment>
    );
  }
}

export default App;
