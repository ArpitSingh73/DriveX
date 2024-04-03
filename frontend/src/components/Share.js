import { React, useEffect, useRef, useState } from "react";
import Share2 from "../images/share-2.svg";
import Slash from "../images/slash.svg";
import UserCheck from "../images/user-check.svg";
import "./share.css";

function Share({
  account,
  contract,
  setIncorrectAddress,
  setTxnCancelled
}) {
  const ref = useRef(null);
  const deny = useRef(null);
  const remove = useRef(null);
  const [sharedAddress, setSharedAddress] = useState(null);
  const [addressList, setAddressList] = useState([]);

  const addClass = async () => {
    contract && setAddressList(await contract.shareAccess());
    ref.current.classList.toggle("parent-display");
  };

  const handleChange = (e) => {
    setSharedAddress(e.target.value);
  };

  const handleSharing = async () => {
    setIncorrectAddress(false);
    setTxnCancelled(false);

    try {
      await contract.allow(sharedAddress);

      window.location.reload();
      setSharedAddress(null);
    } catch (error) {
      if (error.info.error != undefined) {
        if (error.info.error.code === 4001) setTxnCancelled(true);
      } else if (error.code === "UNSUPPORTED_OPERATION") {
        setIncorrectAddress(true);
      }
    }
  };

  const disAllow = async () => {
    await contract.disallow(deny.current.innerHTML);
    remove.current.classList.add("parent-display");
  };

  return (
    <>
      <div className="container my-5 px-5">
        <div className="mb-3" style={{ display: "flex" }}>
          <button onClick={addClass}>
            <img style={{ padding: "5px" }} src={UserCheck}></img>
          </button>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Share your drive"
            id="formFile"
            disabled={!account}
            style={{ marginRight: "5px", marginLeft: "5px" }}
            onChange={handleChange}
          />
          <button disabled={!sharedAddress}>
            <img
              style={{ padding: "5px" }}
              src={Share2}
              onClick={handleSharing}
            ></img>
          </button>
        </div>
        <div ref={ref} className="parent parent-display">
          {addressList &&
            addressList.map((item) => {
              if (item["1"]) {
                return (
                  <div key={item["0"]} className="son" ref={remove}>
                    <div
                      ref={deny}
                      style={{ wordBreak: "break-word" }}
                      className="son1"
                    >
                      {item["0"]}
                    </div>
                    <div>
                      <button className="son2">
                        <img
                          style={{ padding: "5px" }}
                          src={Slash}
                          onClick={disAllow}
                        ></img>
                      </button>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Share;
