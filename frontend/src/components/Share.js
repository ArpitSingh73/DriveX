import React from "react";
import Share2 from "../images/share-2.svg";
function Share({ account, provider, contract }) {
  return (
   

    <div className="container my-5 px-5">
      <div className="mb-3" style={{ display: "flex" }}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Share your drive"
          id="formFile"
          disabled={!account}
          style={{ marginRight: "5px" }}
          // onChange={changeHandler}
        />
        <button>
          <img style={{ padding: "5px" }} src={Share2}></img>
        </button>
      </div>
    </div>
  );
}

export default Share;
