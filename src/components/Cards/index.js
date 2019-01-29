import React, { Component, Fragment } from "react";
import "./style.css";

import video from "../../assets/video-placeholder.png";

class Cards extends Component {
  render() {
    return (
      <Fragment>
        <div className="cards-container">
          <div className="card-content">
            <img src={video} alt="video" />
            <h3>
              LE SPOT : Rencontre avec Jean-Yves Fredriksen, alpiniste français
            </h3>
            <span>Trek TV</span>
            <div className="line">
              <span>144 vues</span>
              <span> . il y a 3 heures</span>
            </div>
          </div>
          <div className="card-content">
            <img src={video} alt="video" />
            <h3>LOREM IPSUM :Lorem ipsum dolor sit amet</h3>
            <span>Lorem TV</span>
            <div className="line">
              <span>1690 vues</span>
              <span> . il y a 8 heures</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
