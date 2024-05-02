import React from 'react'
import { useState,useEffect } from 'react';


export default function ReadDocs() {
    const id = parseInt(window.location.href.split("/").pop());

    const [docs, setDocs] = useState([{}]);

    const url = `https://popular-parrot-100.telebit.io/docs/`;
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
              "ngrok-skip-browser-warning": "1", // Add this header
              // Include other headers as needed
            }
          
          })
        .then(response => response.json())
        .then(data => {
            setDocs(data.filter((item) => item.article_id === id)[0]);

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [id,url]); 
return (
    <>
        <div>
            <div className="container p-4">
                <div className="row p-auto m-auto d-flex justify-content-center">
                    <div className="col-md-12" id='article'>
                   
                                    <h1 style={{fontSize:'50px'}} dangerouslySetInnerHTML={{ __html: docs.title }}></h1>
                                    <p style={{fontWeight:'100'}} dangerouslySetInnerHTML={{ __html: docs.content }}></p>
                         
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
