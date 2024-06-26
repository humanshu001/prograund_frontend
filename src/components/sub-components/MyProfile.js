import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import profile from "../../assets/profile.png" 
import banner from "../../assets/banner.png"

export default function MyProfile() {
const user_id = parseInt(window.location.href.split('/')[4]) || 1;


  
  const url = `https://popular-parrot-100.telebit.io/profile/`
  const track_record  = `https://popular-parrot-100.telebit.io/track-record/`

  const [user, setUser] = useState({});
  const [trackers, setTrackers] = useState([]);
  const [trackings, setTrackings] = useState([]);

  useEffect(() => {
    fetch(url+user_id,{
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user_id,url]);


  useEffect(() => {
    fetch(track_record,{
      method: 'POST',
      body: JSON.stringify({user_id: user_id})
    })
      .then(response => response.json())
      .then(data => {
        setTrackers(data.trackers);
        setTrackings(data.trackings);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } , [user_id,track_record]);


  return (
    <>
      <div>
        <img src={user.banner ? "https://popular-parrot-100.telebit.io/Files/" + user.banner : banner} alt='test' style={{ width: '100%',height:'23vh',objectFit:'cover' }}></img>
      </div>
      <div className='d-flex justify-content-evenly' style={{ marginBottom: '-20px' }}>
        <img src={user.image ? "https://popular-parrot-100.telebit.io/Files/" + user.image : profile} alt="" style={{ width: '110px', height: '110px', borderRadius: '50%', position: 'relative', top: '-55px', marginLeft: '20px', border: '2px solid var(--color-4)', objectFit:'cover' }} className='profile-image' />
        <div className="mx-3 user-data">
          <h3 className='mb-0 mt-1'>{user.fname || 'ProGraund User'} {user.lname || ''}</h3>
          <h6>{user.username || 'Username'}</h6>
        </div>
      </div>
      <div className='bio'>



        <h6 style={{ fontWeight: '700', padding: '0 30px', color: 'var(--color-4)' }}>{trackers} Trackers || {trackings} Trackings</h6>




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
