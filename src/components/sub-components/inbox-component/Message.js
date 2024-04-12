import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../../assets/profile.png'

export default function Message(props) {
    const { user, user_id, image, message, sender } = props;

  return (
    <>
        <style dangerouslySetInnerHTML={{__html:`
        @media screen and (max-width: 767px) {
          .chat{
            margin:10px 0!important;
          }
        }
        `}}></style>
    
        <div className="chat d-flex justify-content-between p-2 align-items-center m-4" style={{ backgroundColor: "var(--color-2)",borderRadius:'5px' }}>
          <Link to={'/chat/' + sender} style={{color:'var(--color-5)'}} className="d-flex ">
            <img src={image?"https://popular-parrot-100.telebit.io/Files/" + image : profile} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid var(--color-4)" }} alt="" />
            <div className="ml-2 chat-text d-flex flex-column justify-content-center">
              <h5 className='mb-0'>{user}</h5>
              <p style={{fontSize:'13px'}}>{message}</p>
            </div>
          </Link>
          <div className="">
            <Link className='btn mr-2' style={{ color: "var(--color-1)", backgroundColor: "var(--color-4)", letterSpacing: "1px", fontWeight: "900!important", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }} to={`/profile/${user_id}`}><b>Profile</b></Link>
          </div>
        </div>


    </>
  )
}

Message.defaultProps = {
    user: "User"
}