import React, { Component, Fragment } from "react";
import "./style.css";
import Button from "../../components/Button";

class Abonnements extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div className="title-container">
            <h2>Aujourd'hui</h2>
            <Button
              title="Grille"
              icone={<i class="fas fa-grip-horizontal fa-2x" />}
            />
            <Button />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Abonnements;
