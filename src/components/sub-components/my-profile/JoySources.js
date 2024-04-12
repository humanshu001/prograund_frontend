import React from 'react'
import PostItem from '../dashboard-components/Post Item/PostItem'
import { useState, useEffect } from 'react'
import Loader from '../Loader';


export default function JoySources() {
  const url = "https://popular-parrot-100.telebit.io/posts/";

  // declare props

  const user_id = parseInt(window.location.href.split('/')[4]) || 1;

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
          .filter((item) => item.type === "Funny")
          .map((item) => (
            <div key={item.post_id}>
              <PostItem
                title={item.title} post_id={item.post_id} time={item.uploaded_time} likes_count={item.likes_count} user_id={parseInt(item.user_id)} image_link={item.file} username={item.user? item.user.username:"ProGraund User"} image={item.user?item.user.image:null}
              />
            </div>
          ))
      )}
    </>
  );
}
