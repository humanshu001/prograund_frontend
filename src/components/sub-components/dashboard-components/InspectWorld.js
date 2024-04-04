import React, {useState,useEffect} from 'react'
import PostItem from './Post Item/PostItem'

export default function DebugStress() {
  const url = 'https://foolish-moth-88.telebit.io/professional/';
  // const url = 'http://127.0.0.1:8000/posts/';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(20);
  
  const getData = async (page) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "ngrok-skip-browser-warning": "1", // Add this header
          // Include other headers as needed
        }
      });
  
      // Check if the response is successful
      if (!response.ok) {
        console.error(`Error fetching data: HTTP error! status: ${response.status}`);
        return;
      }
  
      const data = await response.json();
      const maindata = data.flat();
      const paginatedPosts = maindata.slice(page * postsPerPage, (page + 1) * postsPerPage);
      setPosts(paginatedPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // now we will call the function to fetch all posts
  useEffect(() => {
    getData(page);
  }, [page]);


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
            <div key={item.post_id}><PostItem title={item.title} post_id={item.post_id} time={item.uploaded_time} likes_count={item.likes_count} user_id={parseInt(item.user_id)} image_link={item.file}/></div>
          ))}
        </>
      )}
    </>
  );

}
