import React, { useRef } from "react";
import "./alert.css";
import X from "../images/x.svg";
function Alert({
  account,
  uploading,
  driveAccess,
  txnCancelled,
  hasImage,
  incorrectAddress,
  errorOccurred,
  uploaded
}) {
  if (!account) {
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
  } else if (errorOccurred) {
    return (
      <div className="warning">
        <div className="message">Something went wrong !</div>
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
  else if (uploading) {
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
        <div className="message">User denied transaction!</div>
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
  else if (!driveAccess) {
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
  }
  else if (!hasImage) {
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
} 
  else if (incorrectAddress) {
    return (
      <div className="warning">
        <div className="message">Invalid address !</div>
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
  else if (uploaded) {
    return (
      <div className="warning">
        <div className="message">Image uploaded successfully</div>
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
