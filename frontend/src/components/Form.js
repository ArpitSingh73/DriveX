import { React, useState } from "react";
import axios from "axios";
import Upload from "../images/upload-cloud.svg";
import "./button.css";
// import dotenv from "dotenv";
// dotenv.config();
function Form({ account, provider, contract }) {
  
  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (e) => {
    // setSelectedFile(event.target.files[0]);

 const data = e.target.files[0]; //files array of files object
 // console.log(data);
 const reader = new window.FileReader();
 reader.readAsArrayBuffer(data);
 reader.onloadend = () => {
   setFile(e.target.files[0]);
 };
 setSelectedFile(e.target.files[0].name);
 e.preventDefault();

  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      //  const metadata = JSON.stringify({
      //    name: "File name",
      //  });
      //  formData.append("pinataMetadata", metadata);

      //  const options = JSON.stringify({
      //    cidVersion: 0,
      //  });
      //  formData.append("pinataOptions", options);

      const res = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          //  Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          
        },
      });
      // const resData = await res.json();
      // console.log(resData);
      const hash = `ipfs://${res.data.IpfsHash}`;
      await contract.add(account, hash);
      selectedFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5 px-5">
      <div class="mb-3" style={{ display: "flex" }}>
        <input
          class="form-control form-control-lg"
          type="file"
          id="formFile"
          disabled={!account}
          style={{ marginRight: "5px" }}
          onChange={changeHandler}
        />
        <button onClick={handleSubmission}>
          <img style={{ padding: "5px" }} src={Upload} disabled={!selectedFile}></img>
        </button>
      </div>
    </div>
  );
}

export default Form;
