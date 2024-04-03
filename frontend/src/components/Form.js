import { React, useState } from "react";
import axios from "axios";
import Upload from "../images/upload-cloud.svg";
import "./button.css";

function Form({
  account,
  contract,
  setUploading,
  setTxnCancelled,
  setErrorOccurred,
  setUploaded,
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setSelectedFile(e.target.files[0]);
    };
    setSelectedFile(e.target.files[0].name);
    e.preventDefault();
  };

  const handleSubmission = async () => {
    try {
      setUploading(true);
      setErrorOccurred(false);
      setTxnCancelled(false);
      setUploaded(false);

      const formData = new FormData();
      formData.append("file", selectedFile);
      const res = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: process.env.REACT_APP_pinata_api_key,
          pinata_secret_api_key: process.env.REACT_APP_pinata_secret_api_key,
          "Content-Type": "multipart/form-data",
        },
      });
      const hash = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
      await contract.add(account, hash);
      setUploading(false);
      setUploaded(true);
    } catch (error) {
      if (error.info.error != undefined) {
        if (error.info.error.code === 4001) {
          setUploading(false);
          setTxnCancelled(true);
        }
      } else {
        setErrorOccurred(true);
      }
    }
  };

  return (
    <div className="container my-5 px-5">
      <div className="mb-3" style={{ display: "flex" }}>
        <input
          className="form-control form-control-lg"
          type="file"
          id="formFile"
          disabled={!account}
          style={{ marginRight: "5px" }}
          onChange={changeHandler}
        />
        <button onClick={handleSubmission} disabled={!selectedFile}>
          <img style={{ padding: "5px" }} src={Upload}></img>
        </button>
      </div>
    </div>
  );
}

export default Form;
