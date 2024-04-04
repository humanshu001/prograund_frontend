import React from 'react'
import PostItem from '../dashboard-components/Post Item/PostItem'
import { useState, useEffect } from 'react'
import Loader from '../Loader';

export default function Snippets(props) {
  const url = "https://foolish-moth-88.telebit.io/posts/";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const user_id = parseInt(window.location.href.split('/')[4]) || 1;

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
        setPosts(data.filter(item => item.user_id == parseInt(user_id)));
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
        <Loader/>
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
