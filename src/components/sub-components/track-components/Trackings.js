import React, { useEffect } from 'react';
import { useState } from 'react';
import profile from '../../../assets/profile.png';

export default function Trackers() {
  const [trackers, setTrackers] = useState([]);
  const url = "https://foolish-moth-88.telebit.io/tracking-all/";

  const getTracker = async() => {
    await fetch(url,{
    method: 'POST',
      body: JSON.stringify({
        user_id: localStorage.getItem('sessionId')
      })
    })
    .then((response) => response.json())
    .then((data) => {
      setTrackers(data);
    })
    .catch((error) => console.log('error', error));
  }

  useEffect(() => {
    getTracker();
  }, []);

  return (
    <>
      <div className="message-box overflow-scroll" style={{ height: "92vh", overflowY: "scroll" }}>
       {
        trackers.map((tracker,index) => (
          <div key={index} className="chat d-flex justify-content-between p-2 align-items-center m-4" style={{ backgroundColor: "var(--color-2)",borderRadius:'5px' }}>
          <div className="d-flex ">
            <img src={tracker.user.image ? "https://foolish-moth-88.telebit.io/Files/"+tracker.user.image : profile} style={{ width: "70px", height: "70px", borderRadius: "50%", border: "2px solid var(--color-4)" }} alt="" />
            <div className="ml-2 chat-text d-flex flex-column justify-content-center">
              <h6 className='mb-0 mt-3'>{tracker.user.fname} {tracker.user.lname}</h6>
              <p style={{fontSize:'13px',marginLeft:'2px'}}>{tracker.user.username}</p>
            </div>
          </div>
          <div className="">
            <button className='btn mr-2' style={{ color: "var(--color-1)", backgroundColor: "var(--color-4)", letterSpacing: "1px", fontWeight: "900!important", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }} to="/"><b>Untrack</b></button>
          </div>
        </div>
        ))
       }
      </div>
    </>
  );
}
