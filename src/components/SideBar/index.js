import React, { Component, Fragment } from "react";
import "./style.css";

import Menu from "../Menu";

class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="sidebar-container">
          <div className="main-section">
            <Menu
              title="Accueil"
              icone={<i class="fas fa-home" />}
              name={"Accueil"}
            />
            <Menu
              title="Tendances"
              icone={<i class="fas fa-fire" />}
              name={" Tendances"}
            />
            <Menu
              title="Abonnements"
              icone={<i class="fab fa-youtube" />}
              name={"Abonnements"}
            />
          </div>
          <div className="main-section">
            <Menu
              title="Bibliothèque"
              icone={<i class="fas fa-folder" />}
              name={"Bibliothèque"}
            />
            <Menu
              title="Historique"
              icone={<i class="fas fa-fire" />}
              name={"Historique"}
            />
            <Menu
              title="A regarder plus tard"
              icone={<i class="fas fa-clock" />}
              name={"A regarder plus tard"}
            />
            <Menu
              title="Vidéos J'aime"
              icone={<i class="fas fa-stream" />}
              name={"Vidéos 'J'aime'"}
            />
          </div>
          <div className="main-section">
            <h3>ABONNEMENTS</h3>
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={"Lorem Ipsum"}
            />
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={"Lorem Ipsum"}
            />
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={"Lorem Ipsum"}
            />
          </div>
          <div className="main-section">
            <h3>AUTRES CONTENUS YOUTUBE</h3>
            <Menu
              title="YouTube Premium"
              icone={<i class="fab fa-youtube" />}
              name={"YouTube Premium"}
            />{" "}
            <Menu
              title="Films et TV"
              icone={<i class="fas fa-gamepad" />}
              name={" Films et TV"}
            />
            <Menu
              title="Jeux vidéos"
              icone={<i class="fab fa-youtube" />}
              name={"Jeux vidéos"}
            />
            <Menu
              title="En direct"
              icone={<i class="fas fa-stream" />}
              name={"En direct"}
            />
          </div>
          <div className="main-section">
            <Menu
              title="Paramètres"
              icone={<i class="fas fa-cog" />}
              name={"Paramètres"}
            />
            <Menu
              title="Historique des signalements"
              icone={<i class="fas fa-flag" />}
              name={" Historique des si..."}
            />
            <Menu
              title="Aide"
              icone={<i class="fas fa-question-circle" />}
              name={"Aide"}
            />
            <Menu
              title="Votre avis"
              icone={<i class="fas fa-exclamation-circle" />}
              name={"Votre avis"}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SideBar;
