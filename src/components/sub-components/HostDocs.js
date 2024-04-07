import React from "react";

export default function HostDocs() {
  const url = 'https://foolish-moth-88.telebit.io/docs/';
  // const url = "https://foolish-moth-88.telebit.io/docs/";

  const handleSave = (e) => {
    e.preventDefault();
    const docArea = document.getElementById("docArea");
    const titleArea = document.getElementById("titleArea");

    fetch(url, {
      method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "1", // Add this header
          // Include other headers as needed
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("sessionId"),
        title: titleArea.innerHTML,
        content: docArea.innerHTML,
        likes_count: 0,
        share_count: 0,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Document saved successfully");
        window.location = "/docs";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1
        className="ml-4 mt-4 font-weight-bolder "
        style={{ fontSize: "40px" }}
      >
        Write Docs Here
      </h1>
      <hr
        style={{
          backgroundColor: "var(--color-5)",
          height: "2px",
          border: "none",
          borderRadius: "10px",
          margin: "0",
          marginBottom: "15px",
        }}
      />
      <div className="container">
        <form>
          <button
            className="btn prm-btn"
            onClick={(e) => {
              e.preventDefault();
              const docArea = document.getElementById("docArea");
              docArea.innerHTML += "<h1>Title</h1>";
            }}
            style={{
              backgroundColor: "var(--color-3)",
              border: "none",
              color: "var(--color-2)",
              padding: "5px 10px",
              borderRadius: "7px",
              margin: "5px",
              fontSize: "13px",
            }}
          >
            Title
          </button>
          <button
            className="btn prm-btn"
            onClick={(e) => {
              e.preventDefault();
              const docArea = document.getElementById("docArea");
              docArea.innerHTML += "<h3>Sub-Title</h3>";
            }}
            style={{
              backgroundColor: "var(--color-3)",
              border: "none",
              color: "var(--color-2)",
              padding: "5px 10px",
              borderRadius: "7px",
              margin: "5px",
              fontSize: "13px",
            }}
          >
            Sub-title
          </button>
          <button
            className="btn prm-btn"
            onClick={(e) => {
              e.preventDefault();
              const docArea = document.getElementById("docArea");
              docArea.innerHTML += '<b style="font-weight:900">Bold</b>';
            }}
            style={{
              backgroundColor: "var(--color-3)",
              border: "none",
              color: "var(--color-2)",
              padding: "5px 10px",
              borderRadius: "7px",
              margin: "5px",
              fontSize: "13px",
            }}
          >
            <b>B</b>
          </button>
          <button
            className="btn prm-btn"
            style={{
              backgroundColor: "var(--color-3)",
              border: "none",
              color: "var(--color-2)",
              padding: "5px 10px",
              borderRadius: "7px",
              margin: "5px",
              fontSize: "13px",
            }}
            onClick={(e) => {
              e.preventDefault();
              const docArea = document.getElementById("docArea");
              docArea.innerHTML += "<i>Italic</i>";
            }}
          >
            <i>I</i>
          </button>

          <br />
          <div
            contentEditable={true}
            className="d-flex flex-column writing-pad"
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-1)",
              padding: "10px",
              borderRadius: "7px",
              border: "none",
              outline: "none",
              fontWeight: "900",
              fontSize: "60px",
              "&:focus": { border: "none", outline: "none" },
              "&:active": { border: "none", outline: "none" },
            }}
            id="titleArea"
            placeholder="Title"
          ></div>
          <style dangerouslySetInnerHTML={{__html:`.writing-pad[placeholder]:empty:before {
    content: attr(placeholder);
    color: var(--color-5); 
}
`}}></style>
          <div
            placeholder="start writing here..."
            className="d-flex flex-column writing-pad"
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-1)",
              padding: "10px",
              borderRadius: "7px",
              border: "none",
              outline: "none",
              fontWeight: "100",
              "&:focus": { border: "none", outline: "none" },
              "&:active": { border: "none", outline: "none" },
            }}
            contentEditable={true}
            id="docArea"
          ></div>
          <button
            onClick={handleSave}
            className="btn btn-primary mt-3"
            style={{ backgroundColor: "var(--color-5)", border: "none" ,color:'var(--color-1)',padding:'10px 15px',borderRadius:'7px'}}
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
