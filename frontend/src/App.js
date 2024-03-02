import "./App.css";
import Drive from "./atrifacts/contracts/Drive.sol/Drive.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Owner from "./components/Owner";
import Images from "./components/Images";
import Share from "./components/Share";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalopen, setModalopen] = useState(false);
  const [images, setImages] = useState();

  // const provider = new ethers.provders.

  useEffect(() => {
    const connectWallet = async () => {
      const contractAdd = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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
          console.log(contract);
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
      <Owner account={account}></Owner>
      <Form account={account} provider={provider} contract={contract}></Form>
      <Share account={account} provider={provider} contract={contract}></Share>
      <Images
        account={account}
        provider={provider}
        contract={contract}
        setImages={setImages}
        images={images}
      ></Images>
    </div>
  );
}

export default App;
