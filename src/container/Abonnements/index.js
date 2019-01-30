import React, { Component, Fragment } from "react";
import "./style.css";
import Icone from "../../components/Icone";
import Cards from "../../components/Cards";

class Abonnements extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div className="title-container">
            <h2>Aujourd'hui</h2>
            <div className="title-button">
              <Icone icone={<span className="manage">GÉRER</span>} />
              <Icone
                title="Grille"
                icone={<i class="fas fa-grip-horizontal fa-2x" />}
              />
              <Icone title="Liste" icone={<i class="fas fa-list fa-2x" />} />
            </div>
          </div>
          <div className="cards-container">
            <Cards
              title="LE SPOT : Rencontre avec Jean-Yves Fredriksen, alpiniste français"
              channel="Trek TV"
              views="144 vues"
              timeAgo=" . il y a 3 heures"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 7 heures"
            />
          </div>

          <div className="title-container">
            <h2>Cette semaine</h2>
          </div>
          <div className="cards-container">
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
            <Cards
              title="LOREM IPSUM :Lorem ipsum dolor sit amet"
              channel="Lorem TV"
              views="3467 vues"
              timeAgo=" . il y 2 jours"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Abonnements;
