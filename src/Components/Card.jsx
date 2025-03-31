import React from "react";
import "./Card.css";

function Card(props) {
  let cardClass = "card-container";

  if (props.anySelected) {
    cardClass += props.selected ? " selected" : " dim";
  }
  
  return (
    <div className={cardClass}>
      <img src={props.img_src} draggable={false} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Card;
