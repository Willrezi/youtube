import React, { Component, Fragment } from "react";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <div className="btn">
          {" "}
          <button className="btn-style" title={this.props.title}>
            {this.props.icone}
            <span>{this.props.name}</span>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Menu;
