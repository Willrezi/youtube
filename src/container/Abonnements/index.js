import React, { Component, Fragment } from "react";
import "./style.css";
import Button from "../../components/Button";
import Cards from "../../components/Cards";

class Abonnements extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div className="title-container">
            <h2>Aujourd'hui</h2>
            <div className="title-button">
              <Button icone={<span className="manage">GÉRER</span>} />
              <Button
                title="Grille"
                icone={<i class="fas fa-grip-horizontal fa-2x" />}
              />
              <Button title="Liste" icone={<i class="fas fa-list fa-2x" />} />
            </div>
          </div>
          <Cards />
          <div className="title-container">
            <h2>Cette semaine</h2>
          </div>
          <Cards />
        </div>
      </Fragment>
    );
  }
}

export default Abonnements;
