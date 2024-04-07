import React from 'react'
import { Link } from "react-router-dom";

export default function DocsItem(props) {
  const { title, id, content } = props;
  const truncatedContent = content ? content.substring(0, 50) : ""; // Check if title is defined before calling substring

  return (
    <>
      <div className="card mx-1 my-3" style={{ width: "18rem", backgroundColor: "var(--color-2)" }}>
        {/* <img src="https://i.imgur.com/RYaE2J0.jpeg" className="card-img-top" alt="..." /> */}
        <h5 className="card-img-top p-2 doc-title" style={{ backgroundColor: 'var(--color-3)', color: 'var(--color-2)', height: '150px', textOverflow: '"..."',overflow:'hidden'}} dangerouslySetInnerHTML={{__html:title}}></h5>
        <div className="card-body">
          <p className="card-text" style={{ overflowWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: truncatedContent }}>
          </p>
          <Link to={`/read-docs/${id}`} className="btn btn-primary" style={{ color: "var(--color-1)", backgroundColor: "var(--color-5)", letterSpacing: "1px", fontWeight: "900!important", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }}>
            <b>Read Docs</b>
          </Link>
        </div>
      </div>
    </> 
  );
}
