import "./Button.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  return (
    <div class="welcome-button" style={props.divStyle}>
      <a href={props.url}>
        <span className="button-span">{props.text}</span>
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </a>
    </div>
  );
};

export default Button;
