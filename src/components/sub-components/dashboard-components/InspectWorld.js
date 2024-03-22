import React, { useEffect, useState } from 'react'
import PostItem from './Post Item/PostItem';

export default function InspectWorld() {
  const url = 'https://mink-keen-equally.ngrok-free.app/posts/';
  // const url = 'http://127.0.0.1:8000/posts/';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const maindata = data.filter((item) => item.type === "Professional")
    setPosts(maindata);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
          <div className="col-md-12 d-flex justify-content-center">
            <div className="spinner-border text-info m-auto" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
      ) : (
        <>
          {posts.map((item) => (
            <div key={item.post_id}><PostItem title={item.title} image_link={item.file} /></div>
          ))}
        </>
      )}
    </>
  );
}


