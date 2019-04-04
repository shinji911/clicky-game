import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div onClick={() => props.charClick(props.id, props.clicked)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
}

export default CharCard;
