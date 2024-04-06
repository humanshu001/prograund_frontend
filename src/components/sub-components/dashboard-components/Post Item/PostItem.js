import React, { useState, useEffect } from 'react';
import profile from '../../../../assets/profile.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function PostItem(props) {
    let { title, image_link, user_id, post_id, likes_count, time, image, username } = props;

    const url = `https://foolish-moth-88.telebit.io/users/`;
    const likeUrl = `https://foolish-moth-88.telebit.io/likes/`;


    const [liked, setLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);
    const [likeCount, setLikeCount] = useState(likes_count);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const checkLikeByUser = async () => {
        try {
            const response = await fetch(likeUrl, {
                method: 'GET'
            });
            const data = await response.json();
            const filteredLikes = data.filter((item) => item.post_id === post_id && item.user_id === parseInt(localStorage.getItem('sessionId')));
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
                                    setLikeCount(likes_count + 1);
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
                                    setLikeCount(likes_count - 1);
                                }
                            });
                    }

                });
        };
    };

    const commentUrl = `http://127.0.0.1:8000/comments/`; // Assuming this is the endpoint for comments

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



    useEffect(() => {
        const fetchComments = async () => {
            const commentsUrl = `http://127.0.0.1:8000/comments-by-post/`; // Adjust the URL according to your API endpoint
            try {
                fetch(commentsUrl,{
                    method:'POST',
                    body: JSON.stringify({
                        post_id:post_id
                    })
                })
               .then((res)=> res.json())
               .then((data)=>{
                console.log(data);
                setComments(data);
               })
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [post_id]);

    useEffect(() => {
        // Fetch user details, etc.
    }, [user_id]);


    const trackUrl = `http://127.0.0.1:8000/trackers/`;

    const Track = () => {
        fetch(trackUrl, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user_id,
                tracked_by: parseInt(localStorage.getItem('sessionId'))
            })
        })

            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    setLiked(!liked);
                }
            });
    };

    useEffect(() => {


        checkLikeByUser();
    }, [user_id, url]);

    return (
        <>
            <div className="post p-3 card col-md-10 col-sm-12 m-auto" style={{ borderRadius: "20px", backgroundColor: "var(--color-2)" }}>
                <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="d-flex">
                        <img src={image ? "https://foolish-moth-88.telebit.io/Files/" + image : profile} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px", border: "2px solid var(--color-4)" }} />
                        <div className="user-info">
                            <Link to={`/profile/${user_id}`} style={{ color: 'var(--color-5)' }}><h5 className="m-0" >{username ? username : " "}</h5></Link>
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
                {image_link === null || <img src={"https://foolish-moth-88.telebit.io/Files/" + image_link} className="col-md-10 m-auto " alt="" />}
                <div className="actions d-flex justify-content-between mx-2 my-2">
                    <button className={liked ? "liked" : ""} style={{ background: "transparent", border: "none", color: liked ? "red" : "var(--color-5)" }} onClick={Like}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                    <button type='button' style={{ background: "transparent", border: "none" }} data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                        </svg>
                    </button>
                    <button style={{ background: "transparent", border: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                        </svg>
                    </button>

                    {/* Bootstrap Modal */}
                    <div className="modal fade" id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
                        <div className="modal-dialog" style={{backgroundColor:'var(--color-2)'}}>
                            <div className="modal-content">
                                <h5 className="modal-title pt-4 px-3" style={{backgroundColor:'var(--color-2)'}} id="exampleModalLabel">Comments</h5>
                                <div className="modal-body" style={{backgroundColor:'var(--color-2)'}}>
                                    {comments ? comments.map((cmt,index) => (
                                        <div key={index}>{cmt.text}</div>
                                    )): (<div>No comments</div>)}
                                </div>
                                <div className="d-flex align-items-end flex-column p-3 "style={{backgroundColor:'var(--color-2)'}} >
                                    <div className="input-group p-0 overflow-hidden d-flex  align-items-center"  >
                                    <input type="text" className="form-control" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} style={{
                                        backgroundColor: "var(--color-2)",
                                        color: "var(--color-5)",
                                    }} />
                                    <button type="button" className="btn" style={{backgroundColor:'var(--color-5)'}} onClick={postComment}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>{likeCount} likes</p>
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