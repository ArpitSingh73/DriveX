import React from "react";
import "./alert.css";
import X from "../images/x.svg";
function Alert() {
  return (
    <div className="container my-2 d-flex">
      <div className="alert">I am alert</div>
      <div className="buttonn">
        <img src={X}></img>
      </div>
    </div>
  );
}

export default Alert;
