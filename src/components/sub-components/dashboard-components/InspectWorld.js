import React, {useState,useEffect} from 'react'
import PostItem from './Post Item/PostItem'
import Loader from '../Loader';

export default function DebugStress() {
  const url = 'https://popular-parrot-100.telebit.io/professional/';
  // const url = 'https://popular-parrot-100.telebit.io/posts/';

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
  
  useEffect(() => {
    getData(page);
  }, [page]);

  const reload = (e) => {
    e.preventDefault();
    setLoading(true);
    getData(page);
  }


  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          {posts.map((item) => (
            <div key={item.post_id}><PostItem title={item.title} post_id={item.post_id} time={item.uploaded_time} likes_count={item.likes_count} user_id={parseInt(item.user_id)} image_link={item.file}  username={item.user? item.user.username:"ProGraund User"} image={item.user?item.user.image:null}/></div>
          ))}
           <div className="d-flex justify-content-center">
          <button onClick={reload} className='py-2 px-3 mb-5' style={{backgroundColor:'var(--color-5)',border:'none',borderRadius:'10px',color:'var(--color-2)'}}>Reload</button>
          </div>
        </>
      )}
    </>
  );

}
