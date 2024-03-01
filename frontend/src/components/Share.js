import React from "react";
import Share2 from "../images/share-2.svg";
function Share() {
  return (
    <div className="container px-5 my-3">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Share Collection</h2>
        <button style={{ marginLeft: "6px" }}>
          <img style={{ padding: "5px" }} src={Share2}></img>
        </button>
      </div>
    </div>
  );
}

export default Share;
