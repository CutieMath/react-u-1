import React, { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  state = {};
  render() {
    // Components will re-render when props change
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster, index) => {
          const { name, id, email } = monster;
          return (
            <div className="card-container" key={index}>
              <img
                alt={`a monster with name ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2 key={index}>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
