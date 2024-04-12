import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import DocsItem from "./docs-component/DocsItem";

export default function Docs() {
  const url = "https://popular-parrot-100.telebit.io/docs/";
  // const url = "https://popular-parrot-100.telebit.io/docs/";

  const [docs, setDocs] = useState([{}]);

  const getDocs = ()=>
  {
    fetch(url,{
      method: 'GET',
      headers: {
        "ngrok-skip-browser-warning": "1", // Add this header
        // Include other headers as needed
      }
    
    })
    
    .then(response => response.json())
    .then(data => {
      setDocs(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }
    )
  }

  useEffect(() => {
    getDocs();
  }
  ,[]);

  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Docs</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />
      <div className="d-flex justify-content-end">
        <Link to="/host-doc" className="btn mx-2" style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",padding: "10px",borderRadius: "5px",fontSize: "15px"}}><b>Host Docs</b></Link>
      </div>
      <div className="container p-4">
        <div className="row p-auto m-auto d-flex justify-content-center">
          {docs.map((doc,index) => (
            <DocsItem title={doc.title} content={doc.content} key={index} id={doc.article_id} />
          ))}
        </div>
      </div>
    </>
  );
}
