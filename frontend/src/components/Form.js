import { React, useState } from "react";
import axios from "axios";
import Upload from "../images/upload-cloud.svg";
import "./button.css";
function Form({ account, provider, contract, setUploading, setTxnCancelled }) {
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
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: "45bf80b9d27648113d50",
          pinata_secret_api_key:
            "1d824acd9fb31807c8905d8acee736cd5e7f5a1db087833c7775969d7de0bcb2",
          "Content-Type": "multipart/form-data",
        },
      });
      const hash = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
      await contract.add(account, hash);
      // window.location.reload();
      setUploading(false);
    } catch (error) {
      console.clear();
      setUploading(false);
      setTxnCancelled(true);
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
