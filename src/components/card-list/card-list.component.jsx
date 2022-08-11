import React, { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  state = {};
  render() {
    // Components will re-render when props change
    const { monsters } = this.props;
    return (
      <div className="card-section">
        {monsters.map((monster, index) => {
          return (
            <div className="card-container" key={index}>
              <img
                alt={`a monster with name ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2 key={index}>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
