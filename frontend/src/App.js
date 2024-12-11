import "./App.css";
import Drive from "./atrifacts/contracts/Drive.sol/Drive.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Owner from "./components/Owner";
import Images from "./components/Images";
import Share from "./components/Share";
import Alert from "./components/Alert";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [txnCancelled, setTxnCancelled] = useState(false);
  const [incorrectAddress, setIncorrectAddress] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [images, setImages] = useState([]);
  const [hasImage, setHasImage] = useState(true);
  const [driveAccess, setDriveAccess] = useState(true);

  // const provider = new ethers.provders.

  useEffect(() => {
    const connectWallet = async () => {
      const contractAdd = "0xce879b4Beb4634E3F8d0aF11d816a24e9357ABea";
      const contractABI = Drive.abi;

      //
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          setAccount(account[0]);
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          ethereum.on("accountChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAdd,
            contractABI,
            signer
          );
          setContract(contract);
          setProvider(provider);
          // console.log(contract);
        } else {
          alert("Please connect to Metamask !");
        }
      } catch (e) {
        // console.log(e.message);
      }
    };
    connectWallet();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Alert
        driveAccess={driveAccess}
        hasImage={hasImage}
        errorOccurred={errorOccurred}
        account={account}
        txnCancelled={txnCancelled}
        uploading={uploading}
        uploaded={uploaded}
        incorrectAddress={incorrectAddress}
      ></Alert>
      <Owner account={account}></Owner>
      <Form
        account={account}
        provider={provider}
        setUploading={setUploading}
        contract={contract}
        setErrorOccurred={setErrorOccurred}
        setTxnCancelled={setTxnCancelled}
        setUploaded={setUploaded}
      ></Form>
      <Share
        account={account}
        provider={provider}
        contract={contract}
        setErrorOccurred={setErrorOccurred}
        setTxnCancelled={setTxnCancelled}
        setIncorrectAddress={setIncorrectAddress}
      ></Share>
      <Images
        account={account}
        contract={contract}
        setImages={setImages}
        images={images}
        setTxnCancelled={setTxnCancelled}
        setIncorrectAddress={setIncorrectAddress}
        setHasImage={setHasImage}
        setDriveAccess={setDriveAccess}
      ></Images>
    </div>
  );
}

export default App;
