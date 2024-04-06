import React from 'react'
import { Outlet } from 'react-router-dom'
import LAside from './LAside'
import RAside from './RAside'
import { Navigate } from 'react-router-dom';


export default function Main() {
  if(localStorage.getItem("sessionId") === null){
    return <Navigate to="/login" />
  }
  return (
    <>
 
        <div className="screen d-flex"> 
          {/* <Navbar/> */}
          <LAside />
          <div className="main col-md-6 p-0" style={{height:'100vh',overflowY:'scroll',overflowX:'hidden'}}>
            <Outlet/>
          </div>
          <RAside/>
        </div>
        <a href="/" className="support-button not-in-mobile">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(117, 79, 229)" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
        </a>

    </>
  )
}
