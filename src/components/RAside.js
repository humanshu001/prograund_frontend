import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/profile.png';

export default function RAside() {
  const logout = () => {
    localStorage.removeItem("sessionId");
    window.location = "/login";
  }
  const user_id = parseInt(localStorage.getItem('sessionId'));
  
  const url = `https://foolish-moth-88.telebit.io/users/`

  const [user, setUser] = useState({});

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
        const filteredUsers = data.filter((item) => item.id === user_id);
        if (filteredUsers.length > 0) {
          setUser(filteredUsers[0]);
        } else {
          console.error('User not found');
          // Optionally set user to null or keep the existing state
          // setUser(null);
        }
      
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user_id,url]);

  return (
    <>
        <div className="raside fixed-right r-0 col-md-3 p-0">
            <div className="input-group col-md-12 my-3">
                <input type="text" className="form-control" placeholder="Query..."/>
                <div className="input-group-append">
                  <button className="btn" type="button" id="button-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-5)" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                  </button>
                </div>
            </div>
            <div className="not-in-mobile">
                <div className="card m-4 rounded-lg profile">
                  <div className="profile-img">

                    <img src={user.image? "https://foolish-moth-88.telebit.io/Files/"+user.image : defaultImage} alt="" />
                  </div>
                    <Link to={`/profile/${localStorage.getItem('sessionId')}`} style={{textDecoration:'none',color:'var(--color-)'}}><h4>{user.username}</h4></Link>
            <button className='btn not-in-mobile p-2 text-center' onClick={logout} style={{backgroundColor: "var(--color-4)",color: "var(--color-2)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",width:'145px',margin:'5px auto'}}>Logout</button>
            <Link className='btn not-in-mobile p-2 text-center' style={{backgroundColor: "var(--color-3)",color: "var(--color-2)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",width:'145px',margin:'5px auto'}} to="/edit-profile">Edit Profile</Link>
                </div>
            </div>
        </div>
    </>
  )
}
