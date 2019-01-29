import React, { Component, Fragment } from "react";
import "./style.css";

import logoYoutube from "../../assets/youtube.png";
import Avatar from "../Avatar";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header-container">
          <div className="button">
            <button>
              {" "}
              <i class="fas fa-bars fa-2x" />
            </button>
          </div>
          <div className="logo">
            <img src={logoYoutube} alt="Logo Youtube" />
            <span className="country-code">FR</span>
          </div>
          <div className="searchBar-container">
            <form className="search-form">
              <div className="search">
                <input id="title" name="title" placeholder="Rechercher" />
              </div>
              <div className="search-button">
                <button>
                  <i class="fas fa-search fa-2x" title="Rechercher" />
                </button>
              </div>
            </form>
          </div>
          <div className="buttons">
            <button className="button">
              <i
                class="fas fa-video fa-2x"
                title="Créer une vidéo ou un post"
              />
            </button>
            <button className="button">
              <i class="fas fa-th fa-2x" title="Applications YouTube" />
            </button>
            <button className="button">
              <i class="fas fa-comment fa-2x" title="Messages" />
            </button>
            <button className="button">
              <i class="fas fa-bell fa-2x" title="Notifications" />
            </button>
            <Avatar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
