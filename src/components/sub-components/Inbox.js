import React, { useState } from 'react'
import Message from './inbox-component/Message'
import { useEffect } from 'react';
import Loader from './Loader';

export default function Inbox() {

  const url = 'https://foolish-moth-88.telebit.io/my-messages/';
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
      fetch(url+localStorage.getItem('sessionId'), {
          method: 'GET',
          headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
          }
      })
          .then((res) => res.json())
          .then((data) => {
              setMessages(data);
              setLoading(false);
          })
          .catch((err) => {
              console.log(err);
          });
  } , []);
  

  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Messages</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />

      {!loading?
        messages.map((message) => 
        <>
          {message.sender.id !== parseInt(localStorage.getItem('sessionId')) && <Message image={message.sender.image} message={message.message} user={message.sender.username} sender={message.sender.id} user_id={message.sender.id}/>}
        </>
        ):
        <Loader/>

      }

    </>
  )
}
