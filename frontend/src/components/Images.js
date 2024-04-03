import { React, useState } from "react";
// import Shark from "../images/shark.jpg";
import Eye from "../images/eye.svg";
import "./owner.css";
function Images({
  account,
  contract,
  setImages,
  images,
  setDriveAccess,
  setHasImage,
  setIncorrectAddress,
}) {
  const [otherAddress, setOtherAddress] = useState("");

  const handleChange = (e) => {
    setOtherAddress(e.target.value);
  };
  const getdata = async () => {
    setHasImage(true);
    setDriveAccess(true);
    setIncorrectAddress(false);
    let dataArray = [];
    try {
      if (otherAddress) {
        dataArray = await contract.display(otherAddress);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (error) {
      if (error.code === "UNSUPPORTED_OPERATION") {
        setIncorrectAddress(true);
      } else if (error.reason === "You don't have access") {
        setDriveAccess(false);
      }
      return;
    }
    const isEmpty = dataArray.length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img key={i} src={item} alt="new" className="image-list"></img>
          </a>
        );
      });
      setImages(images);
    } else {
      setHasImage(false);
    }
  };

  return (
    <>
      <div className="container my-5 px-5">
        <div className="mb-3" style={{ display: "flex" }}>
          <button onClick={getdata} disabled={!account}>
            <img style={{ padding: "5px" }} src={Eye}></img>
          </button>
          <input
            className="form-control form-control-lg cursorr"
            type="text"
            readOnly
            placeholder="Your drive"
            id="formFile"
            disabled={!account}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />

          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Other's drive"
            id="formFile"
            disabled={!account}
            onChange={handleChange}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
          <button onClick={getdata} disabled={!otherAddress}>
            <img style={{ padding: "5px" }} src={Eye}></img>
          </button>
        </div>
      </div>

      <div className="container text-center">
        <div className="row  row-cols-3 ">
          {images &&
            images.map((item) => {
              return (
                <div key={item["props"]["href"]} className="col">
                  <a href={item["props"]["href"]} target="_blank">
                    <img
                      src={item["props"]["href"]}
                      className="img-thumbnail"
                      alt="..."
                    ></img>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Images;
