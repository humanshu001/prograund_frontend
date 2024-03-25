import React, { useState, useEffect } from 'react';
import profile from '../../../../assets/profile.png';
import moment from 'moment';




export default function PostItem(props) {
    let { title, image_link, user_id, post_id, time } = props;

    const url = `https://foolish-moth-88.telebit.io/users/`;
    const likeUrl = `https://foolish-moth-88.telebit.io/likes/`;

    
    const [user, setUser] = useState({});
    const [liked, setLiked] = useState(false);
   

    const Like = () => {
        fetch(likeUrl, {
            method: 'POST',
            body: JSON.stringify({
                post_id: post_id,
                user_id: parseInt(sessionStorage.getItem('sessionId'))
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                } else {
                    setLiked(!liked);
                }
            });
    };


    const trackUrl = `https://foolish-moth-88.telebit.io/trackers/`;

    const Track = () => {
        fetch(trackUrl, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user_id,
                tracked_by: parseInt(sessionStorage.getItem('sessionId'))
            })
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                } else {
                    setLiked(!liked);
                }
            });
    };

    const unTrack = () => {
        
    }




    useEffect(() => {
        const checkLikeByUser = async () => {
            try {
                const response = await fetch(likeUrl, {
                    method: 'GET',
                    headers: {
                        "ngrok-skip-browser-warning": "1", // Add this header
                        // Include other headers as needed
                    }
                });
                const data = await response.json();
                const filteredLikes = data.filter((item) => item.post_id == post_id && item.user_id == parseInt(sessionStorage.getItem('sessionId')));
                if (filteredLikes.length > 0) {
                    setLiked(true);
                } else {
                    setLiked(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        checkLikeByUser();
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        "ngrok-skip-browser-warning": "1", // Add this header
                        // Include other headers as needed
                    }
                });
                const data = await response.json();
                const filteredUsers = data.filter((item) => item.id === parseInt(user_id));
                if (filteredUsers.length > 0) {
                    setUser(filteredUsers[0]);
                } else {
                    console.error('User not found');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserDetails();

    }, [user_id, url]);



    return (
        <>
            <div className="post p-3 card col-md-10 col-sm-12 m-auto" style={{ borderRadius: "20px", backgroundColor: "var(--color-2)" }}>
                <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="d-flex">
                        <img src={user.image? "https://foolish-moth-88.telebit.io/Files/"+user.image : profile} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px", border: "2px solid var(--color-4)" }} />
                        <div className="user-info">
                            <h5 className="m-0" >{user.username?user.username:" "}</h5>
                            <p className="m-0">{
                                time !== null ? moment(time).fromNow() : "Just now"
                            }</p>
                            <hr style={{ width: "100px", height: "0.3px", backgroundColor: "var(--color-5)", marginTop: "5px", }} />
                        </div>
                    </div>
                    <div className="tracker">
                        <button style={{ color: "var(--color-1)", backgroundColor: "var(--color-4)", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }} onClick={Track}>
                            <h6 style={{ fontWeight: '800', marginBottom: '0', fontFamily: 'fira code' }}><b>TRACK</b></h6>
                        </button>
                    </div>
                </div>
                <p className="col-md-11 col-ms-12 m-auto">
                    {title.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </p>
                {image_link == null || <img src={"https://foolish-moth-88.telebit.io/Files/" + image_link} className="col-md-11 m-auto " alt="" />}
                <div className="actions d-flex justify-content-between mx-2 my-2">
                <button className={liked ? "liked" : ""} style={{ background: "transparent", border: "none", color: liked ? "red" : "var(--color-5)" }} onClick={Like}  disabled={liked}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                    <button style={{ background: "transparent", border: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                        </svg>
                    </button>
                    <button style={{ background: "transparent", border: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                        </svg>
                    </button>
                </div>
            </div>
            <br />
        </>
    );
}

PostItem.defaultProps = {
    title: "This is a test post",
    // image_link: "https://source.unsplash.com/random/400x400"
};
  
