import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import profile from "../../assets/profile.png" 
import banner from "../../assets/banner.png"

export default function MyProfile() {

  /*
  Possible urls from where the user_id can be extracted:
  prograund.com/profile/id
  prograund.com/profile/id/my-docs
  prograund.com/profile/id/snippet
  prograund.com/profile/id/joy-source


  */
const user_id = parseInt(window.location.href.split('/')[4]) || 1;


  
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
      <div>
        <img src={user.banner ? "https://foolish-moth-88.telebit.io/Files/" + user.banner : banner} alt='test' style={{ width: '100%' }}></img>
      </div>
      <div className='d-flex justify-content-evenly' style={{ marginBottom: '-20px' }}>
        <img src={user.image ? "https://foolish-moth-88.telebit.io/Files/" + user.image : profile} alt="" style={{ width: '110px', height: '110px', borderRadius: '50%', position: 'relative', top: '-55px', marginLeft: '20px', border: '2px solid var(--color-4)' }} />
        <div className="mx-3 user-data">
          <h3 className='mb-0 mt-1'>{user.fname || 'ProGraund User'} {user.lname || ''}</h3>
          <h6>{user.username || 'Username'}</h6>
        </div>
      </div>
      <div style={{ marginTop: '-30px' }}>
        <h6 style={{ fontWeight: '700', padding: '0 30px', color: 'var(--color-4)' }}>35 Trackers || 13 Trackings</h6>
        <p style={{ fontSize: '15px', padding: '0 20px', textAlign: 'justify' }}>{user.bio ? user.bio : ""}</p>
      </div>
      <div className="links d-flex justify-content-around align-items-center mb-4" style={{ height: '40px' }}>
        <Link style={{ fontSize: '17px', marginBottom: '0' }} className='on-hover-green' to="./snippets">
          Snippets
          <hr className="green my-0" />
        </Link>
        <Link style={{ fontSize: '17px', marginBottom: '0' }} className='on-hover-green' to="./joy-source">
          Joy Sources
          <hr className="green my-0" />
        </Link>
        <Link style={{fontSize:'17px', marginBottom:'0'}} className='on-hover-green' to="./my-docs">
            Docs
            <hr className="green my-0"/>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
