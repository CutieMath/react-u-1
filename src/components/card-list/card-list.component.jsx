import React, { Component } from "react";
import CardContainder from "../card-container/card-container.component";
import "./card-list.styles.css";

class CardList extends Component {
  state = {};
  render() {
    // Components will re-render when props change
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return <CardContainder name={name} id={id} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
