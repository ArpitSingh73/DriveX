import React from "react";
import Disc from "../images/disc.svg";
import About from "../images/about.svg";
import Home from "../images/home.svg";

// import Share2 from "../images/share-2.svg";

// import{ Image} from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Disc}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={Home}></img>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={About}></img>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={Share2}></img>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
