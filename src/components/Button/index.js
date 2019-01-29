import React, { Component, Fragment } from "react";
import "./style.css";

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button className="button" title={this.props.title}>
          {this.props.icone}
        </button>
      </Fragment>
    );
  }
}

export default Button;
