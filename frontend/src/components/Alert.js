import React, { useRef } from "react";
import "./alert.css";
import X from "../images/x.svg";
function Alert({
  connected,
  contract,
  account,
  uploading,
  driveAccess,
  driveShared,
  txnCancelled,
  hasImage,
  incorrectAddress,
}) {
  if (!connected) {
    return (
      <div className="warning">
        <div className="message">Connect to MetaMask !</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  } else if (uploading) {
    return (
      <div className="warning">
        <div className="message">Image being uploaded</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  } else if (txnCancelled) {
    return (
      <div className="warning">
        <div className="message">Something went wrong !!</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  } else if (!driveAccess) {
    return (
      <div className="warning">
        <div className="message">No access to drive</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  } else if (!hasImage) {
    return (
      <div className="warning">
        <div className="message">No image to display</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  } else if (incorrectAddress) {
    return (
      <div className="warning">
        <div className="message">Not a valid address</div>
        <div
          className="cut"
          onClick={() => {
            let y = document.querySelector(".warning");
            y.classList.add("display");
          }}
        >
          <img src={X}></img>
        </div>
      </div>
    );
  }
}

export default Alert;
