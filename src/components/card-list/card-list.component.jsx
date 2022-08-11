import React, { Component } from "react";

class CardList extends Component {
  state = {};
  render() {
    // Components will re-render when props change
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster, index) => {
          return <h3 key={index}>{monster.name}</h3>;
        })}
      </div>
    );
  }
}

export default CardList;
