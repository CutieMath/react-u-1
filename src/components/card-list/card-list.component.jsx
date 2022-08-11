import React, { Component } from "react";
import Card from "../card-container/card-container.component";
import "./card-list.styles.css";

class CardList extends Component {
  state = {};
  render() {
    // Components will re-render when props change
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
