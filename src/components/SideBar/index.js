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
              name={<span>Accueil</span>}
            />
            <Menu
              title="Tendances"
              icone={<i class="fas fa-fire" />}
              name={<span> Tendances</span>}
            />
            <Menu
              title="Abonnements"
              icone={<i class="fab fa-youtube" />}
              name={<span>Abonnements</span>}
            />
          </div>
          <div className="main-section">
            <Menu
              title="Bibliothèque"
              icone={<i class="fas fa-folder" />}
              name={<span>Bibliothèque</span>}
            />
            <Menu
              title="Historique"
              icone={<i class="fas fa-fire" />}
              name={<span>Historique</span>}
            />
            <Menu
              title="A regarder plus tard"
              icone={<i class="fas fa-clock" />}
              name={<span>A regarder plus tard</span>}
            />
            <Menu
              title="Vidéos J'aime"
              icone={<i class="fas fa-stream" />}
              name={<span>Vidéos "J'aime"</span>}
            />
          </div>
          <div className="main-section">
            <h3>ABONNEMENTS</h3>
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={<span>Lorem Ipsum</span>}
            />
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={<span>Lorem Ipsum</span>}
            />
            <Menu
              title="Lorem Ipsum"
              icone={<i class="fas fa-user-circle" />}
              name={<span>Lorem Ipsum</span>}
            />
          </div>
          <div className="main-section">
            <h3>AUTRES CONTENUS YOUTUBE</h3>
            <Menu
              title="YouTube Premium"
              icone={<i class="fab fa-youtube" />}
              name={<span>YouTube Premium</span>}
            />{" "}
            <Menu
              title="Films et TV"
              icone={<i class="fas fa-gamepad" />}
              name={<span> Films et TV</span>}
            />
            <Menu
              title="Jeux vidéos"
              icone={<i class="fab fa-youtube" />}
              name={<span>Jeux vidéos</span>}
            />
            <Menu
              title="En direct"
              icone={<i class="fas fa-stream" />}
              name={<span>En direct</span>}
            />
          </div>
          <div className="main-section">
            <Menu
              title="Paramètres"
              icone={<i class="fas fa-cog" />}
              name={<span>Paramètres</span>}
            />
            <Menu
              title="Historique des signalements"
              icone={<i class="fas fa-flag" />}
              name={<span> Historique des si...</span>}
            />
            <Menu
              title="Aide"
              icone={<i class="fas fa-question-circle" />}
              name={<span>Aide</span>}
            />
            <Menu
              title="Votre avis"
              icone={<i class="fas fa-exclamation-circle" />}
              name={<span>Votre avis</span>}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SideBar;
