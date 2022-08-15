import React from "react";
import Card from "../card-container/card-container.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  // implicit return
  <div className="card-list">
    {monsters.map((monster, index) => {
      return <Card monster={monster} key={index} />;
    })}
  </div>;
};

export default CardList;
