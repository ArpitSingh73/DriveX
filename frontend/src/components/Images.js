import React from "react";
import Shark from "../images/shark.jpg";

function Images() {
  return (
    <div className="container m-auto">
      <div className="container text-center">
        {/* <div class="row">
          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto",
              backgroundColor: "red",
            }}
          >
            .col-6 .col-md-4
          </div>
          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto",
              backgroundColor: "red",
            }}
          >
            .col-6 .col-md-4
          </div>
          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto",
              backgroundColor: "red",
            }}
          >
            .col-6 .col-md-4
          </div>
        </div> */}

        <div class="row">
          {/* <img src={Shark} class="img-thumbnail" alt="..."></img>
          <img src={Shark} class="img-thumbnail" alt="..."></img>
          <img src={Shark} class="img-thumbnail" alt="..."></img> */}

          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto"
            }}
          >
            <img src={Shark} class="img-thumbnail" alt="..."></img>
          </div>
          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto"
            }}
          >
            <img src={Shark} class="img-thumbnail" alt="..."></img>
          </div>
          <div
            class="col-6 col-md-4 col-sm-2"
            style={{
              height: "400px",
              width: "400px",
              margin: "auto"
            }}
          >
            <img src={Shark} class="img-thumbnail" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;

// <div className="row row-cols-3 ">
//   <div
//     className="col"
//     style={{ height: "400px", width: "400px", margin: "auto" }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//   <div
//     className="col"
//     style={{
//       height: "400px",
//       width: "400px",

//       margin: "auto",
//     }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//   <div
//     className="col"
//     style={{
//       height: "400px",
//       width: "400px",

//       margin: "auto",
//     }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//   <div
//     className="col"
//     style={{
//       height: "400px",
//       width: "400px",
//       margin: "auto",
//     }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//   <div
//     className="col"
//     style={{
//       height: "400px",
//       width: "400px",

//       margin: "auto",
//     }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//   <div
//     className="col"
//     style={{
//       height: "400px",
//       width: "400px",

//       margin: "auto",
//     }}
//   >
//     <img src={Shark} class="img-thumbnail" alt="..."></img>
//   </div>
//  </div>;
