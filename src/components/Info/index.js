import React from "react";
import "./style.css";

function Info(props) {
  return (
    <div>
      <h3 className="info">Current Score:{props.score}</h3>
      <h3 className="info">{props.text}</h3>
    </div>
  )
}

export default Info;
