import React, { useState, useEffect } from 'react';
import profile from '../../../../assets/profile.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function PostItem(props) {
    let { title, image_link, user_id, post_id, likes_count, time, image, username, share_count } = props;

    const url = `https://foolish-moth-88.telebit.io/users/`;
    const likeUrl = `https://foolish-moth-88.telebit.io/likes/`;
    const trackUrl = `https://foolish-moth-88.telebit.io/trackers/`;


    const [liked, setLiked] = useState(false);
    const [likeId, setLikeId] = useState();
    const [likeCount, setLikeCount] = useState(likes_count);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [tracked, setTracked] = useState(false);
    const [trackId, setTrackId] = useState();

    const checkTrackByUser = async () => {
        try {
            const response = await fetch(trackUrl, {
                method: 'GET'
            });
            const data = await response.json();
            // console.log(data);
            const filteredTracks = data.filter((item) => item.user_id == user_id && item.tracked_by == parseInt(localStorage.getItem('sessionId')));
            console.log(filteredTracks);
            if (data.length > 0
                && filteredTracks.length > 0) {
                setTracked(true);
                setTrackId(filteredTracks[0].id);
            } else {
                setTracked(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        checkTrackByUser();
    }, [user_id]);

    const Track = async () => {
        if(!tracked){
            console.log("Track");
            fetch(trackUrl, {
                method: 'POST',
                body: JSON.stringify({
                    user_id: user_id,
                    tracked_by: parseInt(localStorage.getItem('sessionId'))
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTracked(true);
                checkTrackByUser();
            })
        }else{
            console.log("Untrack");
            fetch(`${trackUrl}${trackId}/`, {
                method: 'DELETE',
                body: JSON.stringify({
                    id: parseInt(trackId)
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTracked(false);
            })
        }
    }

    const checkLikeByUser = async () => {
        try {
            const response = await fetch(likeUrl, {
                method: 'GET'
            });
            const data = await response.json();
            const filteredLikes = data.filter((item) => item.post_id == post_id && item.user_id == localStorage.getItem('sessionId'));
            if (filteredLikes.length > 0) {
                setLiked(true);
                setLikeId(filteredLikes[0].id);
            } else {
                setLiked(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const Like = () => {
        if (!liked) {
            console.log("Like");
            console.log(likeId);
            fetch(likeUrl, {
                method: 'POST',
                body: JSON.stringify({
                    post_id: parseInt(post_id),
                    user_id: parseInt(localStorage.getItem('sessionId'))
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data === "Added Successfully") {
                        checkLikeByUser();
                        const postUrl = "https://foolish-moth-88.telebit.io/posts/";
                        fetch(postUrl, {
                            method: 'PUT',
                            body: JSON.stringify({
                                post_id: parseInt(post_id),
                                likes_count: likeCount + 1
                            })
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.error) {
                                    alert(data.error);
                                } else {
                                    setLiked(!liked);
                                    setLikeCount(likeCount + 1);
                                }
                            });
                    }
                });
        } else {
            fetch(`${likeUrl}${likeId}/`, {
                method: 'DELETE',
                body: JSON.stringify({
                    id: parseInt(likeId)
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data === "Deleted Successfully") {
                        checkLikeByUser();
                        const postUrl = "https://foolish-moth-88.telebit.io/posts/";
                        fetch(postUrl, {
                            method: 'PUT',
                            body: JSON.stringify({
                                post_id: parseInt(post_id),
                                likes_count: likeCount - 1
                            })
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.error) {
                                    alert(data.error);
                                } else {
                                    setLiked(!liked);
                                    setLikeCount(likeCount-1);
                                }
                            });
                    }

                });
        };
    };

    const commentUrl = `https://foolish-moth-88.telebit.io/comments/`; // Assuming this is the endpoint for comments

    // Function to handle posting a comment
    const postComment = async () => {
        const commentData = {
            post_id: parseInt(post_id),
            user_id: parseInt(localStorage.getItem('sessionId')),
            text: comment,
        };

        try {
            const response = await fetch(commentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });
            if (response.ok) {
                alert("Comment added successfully");
                setComment("");
            } else {
                alert("Failed to add comment");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const fetchComments = async () => {
        const commentsUrl = `https://foolish-moth-88.telebit.io/comments-by-post/`; // Adjust the URL according to your API endpoint
        try {
            fetch(commentsUrl,{
                method:'POST',
                body: JSON.stringify({
                    post_id:post_id
                })
            })
           .then((res)=> res.json())
           .then((data)=>{
            setComments(data);
           })
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    useEffect(() => {

        fetchComments();
    }, [post_id]);

    useEffect(() => {
        // Fetch user details, etc.
    }, [user_id]);

    useEffect(() => {


        checkLikeByUser();
    }, [user_id, url]);

    return (
        <>

            <style dangerouslySetInnerHTML={{__html:`
            .comment-container {
                max-height: 400px; 
                overflow-y: auto; 
            }
            
            .comment {
                margin-bottom: 10px; 
                width: 70%;
                padding: 10px;
                background-color: var(--color-5); 
                color:var(--color-2);
                border-radius: 5px; 
                float: right;
            }
            
            .no-comments {
                text-align: center;
                color: var(--color-5); 
                font-weight:700
            }
            
            `}}></style>
            <div className="post p-3 card col-md-10 col-sm-12 m-auto" style={{ borderRadius: "20px", backgroundColor: "var(--color-2)" }}>
                <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="d-flex">
                        <img src={image ? "https://foolish-moth-88.telebit.io/Files/" + image : profile} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px", border: "2px solid var(--color-4)" }} className='user-image' />
                        <div className="user-info">
                            <Link to={`/profile/${user_id}`} style={{ color: 'var(--color-5)' }}><h5 className="m-0" >{username ? username : " "}</h5></Link>
                            <p className="m-0">{
                                time !== null ? moment(time).fromNow() : "Just now"
                            }</p>
                            <hr style={{ width: "150px", height: "0.3px", backgroundColor: "var(--color-5)", marginTop: "5px", }} />
                        </div>
                    </div>
                    <div className="tracker">
                        <button style={{ color: "var(--color-1)", backgroundColor: "var(--color-4)", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }} onClick={Track}>
                            <h6 style={{ fontWeight: '800', marginBottom: '0', fontFamily: 'fira code' }}><b>{(!tracked) ? "TRACK" : "UNTRACK"}</b></h6>
                        </button>
                    </div>
                </div>
                <p className="col-md-11 col-ms-12 m-auto">
                    {title.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </p>
                {image_link === null || <img src={"https://foolish-moth-88.telebit.io/Files/" + image_link} className="col-md-10 m-auto post-image" alt="" />}
                <div className="actions d-flex justify-content-between mx-2 pt-4">
                    <button className={liked ? "liked" : ""} style={{ background: "transparent", border: "none", color: liked ? "red" : "var(--color-5)", display:'flex'}} onClick={Like}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                        <p className='ml-2 fs-3'>{likeCount}</p>
                    </button>
                    <button type='button' style={{ background: "transparent", border: "none",display:'flex'}} data-toggle="modal" data-target={`#exampleModal-${parseInt(post_id)}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                        </svg>
                        <p className='ml-2 fs-3' style={{color:'var(--color-5)'}}>{comments.length}</p>
                    </button>
                    <button style={{ background: "transparent", border: "none",display:'flex' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                        </svg>
                        <p className='ml-2 fs-3' style={{color:'var(--color-5)'}}>{share_count}</p>
                    </button>

                    {/* Bootstrap Modal */}
                    <div className="modal fade" id={`exampleModal-${parseInt(post_id)}`} tabIndex={-1} aria-labelledby={`exampleModalLabel-${parseInt(post_id)}`}aria-hidden='true'>
                        <div className="modal-dialog modal-lg " style={{backgroundColor:'var(--color-2)',borderRadius:'30px'}}>
                            <div className="modal-content" style={{marginTop:"100px",borderRadius:'30px'}} >
                                <h4 className="modal-title pt-4 px-3" style={{backgroundColor:'var(--color-2)'}} id="exampleModalLabel">Comments</h4>
                                <div className="modal-body comment-container" style={{ backgroundColor: 'var(--color-2)' }}>
                                    {comments.length > 0 ? comments.map((cmt, index) => (
                                        <div key={index}>
                                        <div className="comment" >
                                            <h6><img style={{width:'30px',borderRadius:'30px', border:'1px solid var(--color-2)',height:'30px', objectFit:'cover'}} src={"https://foolish-moth-88.telebit.io/Files/"+ cmt.user_details.image} alt="" /> {cmt.user_details.username}</h6>
                                           <div className='pl-5'style={{fontWeight:'300'}}> {cmt.text}</div>
                                        <div className="small text-right w-100" style={{fontSize:'10px'}}> {moment(cmt.time).fromNow()} </div>
                                        </div>
                                        </div>
                                    )) : (<div className="no-comments">No comments</div>)}
                                </div>

                                <div className="d-flex align-items-end flex-column p-3 "style={{backgroundColor:'var(--color-2)'}} >
                                    <div className="input-group p-0 overflow-hidden d-flex  align-items-center"  >
                                    <input type="text" className="form-control" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} style={{
                                        backgroundColor: "var(--color-2)",
                                        color: "var(--color-5)",
                                    }} />
                                    <button type="button" className="p-2 px-3" style={{backgroundColor:'var(--color-5)',border:'none'}} onClick={postComment}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
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