import React from "react";
import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Docs</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />
      <div className="container p-4">
        <div className="row p-auto m-auto d-flex justify-content-center">
          <div className="card mx-1 my-3" style={{ width: "18rem", backgroundColor: "var(--color-2)" }}>
            <img src="https://i.imgur.com/RYaE2J0.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary" style={{ color: "var(--color-1)", backgroundColor: "var(--color-5)", letterSpacing: "1px", fontWeight: "900!important", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }}>
                <b>Read Docs</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
