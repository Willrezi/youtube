import React, { Component, Fragment } from "react";
import "./style.css";

import userAvatar from "../../assets/profil.jpg";

class Avatar extends Component {
  render() {
    return (
      <Fragment>
        <button className="avatar">
          <img src={userAvatar} alt="avatar" />
        </button>
      </Fragment>
    );
  }
}

export default Avatar;
