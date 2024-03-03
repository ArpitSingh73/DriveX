import { React, useState } from "react";
// import Shark from "../images/shark.jpg";
import Eye from "../images/eye.svg";
import "./owner.css";
function Images({ account, provider, contract, setImages, images }) {
  // const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = null;
    // const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img key={i} src={item} alt="new" className="image-list"></img>
          </a>
        );
      });
      setImages(images);
      console.log(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      <div className="container my-5 px-5">
        <div className="mb-3" style={{ display: "flex" }}>
          <button onClick={getdata}>
            <img style={{ padding: "5px" }} src={Eye}></img>
          </button>
          <input
            className="form-control form-control-lg"
            type="text"
            readOnly
            placeholder="Your drive"
            id="formFile"
            disabled={!account}
            style={{ marginRight: "5px", marginLeft: "5px" }}
            // onChange={changeHandler}
          />

          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Other's drive"
            id="formFile"
            disabled={!account}
            style={{ marginRight: "5px", marginLeft: "5px" }}
            // onChange={changeHandler}
          />
          <button onClick={getdata}>
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
