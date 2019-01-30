import React, { Component, Fragment } from "react";
import "./style.css";

import video from "../../assets/video-placeholder.png";

class Cards extends Component {
  render() {
    return (
      <div className="card-content">
        <img src={video} alt="video" />
        <h3>{this.props.title}</h3>
        <span>{this.props.channel}</span>
        <div className="line">
          <span>{this.props.views}</span>
          <span>{this.props.timeAgo}</span>
        </div>
      </div>
    );
  }
}

export default Cards;
