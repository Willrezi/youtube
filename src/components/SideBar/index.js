import React, { Component, Fragment } from "react";
import "./style.css";

class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="sidebar-container">
          <div className="main-section">
            <div className="btn">
              {" "}
              <button className="btn-style" title="Accueil">
                <i class="fas fa-home" />
                <span>Accueil</span>
              </button>
            </div>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Tendances">
                <i class="fas fa-fire" />
                <span> Tendances</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Abonnements">
                <i class="fab fa-youtube" />
                <span>Abonnements</span>
              </button>
            </div>
          </div>
          <div className="main-section">
            <div className="btn">
              {" "}
              <button className="btn-style" title="Bibliothèque">
                <i class="fas fa-folder" />
                <span>Bibliothèque</span>
              </button>
            </div>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Historique">
                <i class="fas fa-fire" />
                <span> Historique</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Abonnements">
                <i class="fas fa-clock" />
                <span>A regarder plus tard</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Abonnements">
                <i class="fas fa-stream" />
                <span>Vidéos "J'aime"</span>
              </button>
            </div>
          </div>
          <div className="main-section">
            <h3>ABONNEMENTS</h3>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Youtube Premium">
                <i class="fas fa-user-circle" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Films et TV">
                <i class="fas fa-user-circle" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Jeux Vidéos">
                <i class="fas fa-user-circle" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>
          <div className="main-section">
            <h3>AUTRES CONTENUS YOUTUBE</h3>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Youtube Premium">
                <i class="fab fa-youtube" />
                <span>YouTube Premium</span>
              </button>
            </div>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Films et TV">
                <i class="fas fa-film" />
                <span> Films et TV</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Jeux Vidéos">
                <i class="fas fa-gamepad" />
                <span>Jeux Vidéos</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="En Direct">
                <i class="fas fa-stream" />
                <span> En Direct</span>
              </button>
            </div>
          </div>
          <div className="main-section">
            <div className="btn">
              {" "}
              <button className="btn-style" title="Paramètres">
                <i class="fas fa-cog" />
                <span>Paramètres</span>
              </button>
            </div>
            <div className="btn">
              {" "}
              <button className="btn-style" title="Historique des signalements">
                <i class="fas fa-flag" />
                <span> Historique des si...</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Aide">
                <i class="fas fa-question-circle" />
                <span>Aide</span>
              </button>
            </div>
            <div className="btn">
              <button className="btn-style" title="Votre avis">
                <i class="fas fa-exclamation-circle" />
                <span>Votre avis</span>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SideBar;
