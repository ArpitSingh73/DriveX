import React from "react";
import "./owner.css";

function Owner({ account }) {
  return (
    <div className="owner">
      <div style={{ wordBreak: "break-word" }}> Drive of : {account}</div>
    </div>
  );
}

export default Owner;
