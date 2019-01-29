import React, { Component, Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Abonnements from "./container/Abonnements";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main">
          <SideBar />
          <Abonnements />
        </div>
      </Fragment>
    );
  }
}

export default App;
