import React from 'react'
import PostItem from '../dashboard-components/Post Item/PostItem'
import { useState, useEffect } from 'react'

export default function Snippets() {
  const url = "https://foolish-moth-88.telebit.io/posts/";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        "ngrok-skip-browser-warning": "1", // Add this header
        // Include other headers as needed
      }
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data.filter(item => item.user_id == parseInt(sessionStorage.getItem('sessionId'))));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getData();
  } , []);

  return (
    <>
      {loading ? (
        <div className="col-md-12 d-flex justify-content-center">
          <div className="spinner-border text-info m-auto" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        posts
          .filter((item) => item.type === "Professional")
          .map((item) => (
            <div key={item.post_id}>
              <PostItem
                title={item.title}
                user_id={parseInt(item.user_id)}
                time={item.uploaded_time}
                image_link={item.file}
              />
            </div>
          ))
      )}
    </>
  );
}
