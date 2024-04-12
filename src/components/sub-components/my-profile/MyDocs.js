import React from 'react'
import { useState, useEffect } from 'react'
import DocsItem from '../docs-component/DocsItem';

export default function MyDocs() {
  const url = "https://popular-parrot-100.telebit.io/docs/";
  // const url = "https://popular-parrot-100.telebit.io/docs/";

  const [docs, setDocs] = useState([{}]);

  const user_id = parseInt(window.location.href.split('/')[4]) || 1;

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
      setDocs(data.filter(doc => doc.user_id == user_id));
      // setDocs(data);
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
       
        <div className="row p-auto m-auto d-flex justify-content-center">
          {docs.map((doc,index) => (
            <DocsItem title={doc.title} content={doc.content} key={index} id={doc.article_id} />
          ))}
        </div>
   
    </>
  )
}
