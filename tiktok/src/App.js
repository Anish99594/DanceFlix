//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from 'axios';
//import axios from './Axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    //e.preventDefault();
    async function fetchPosts(){
        const responce = await axios.get("http://localhost:9000/v2/post");
        setVideos(responce.data);
        return responce;
     
    }
    fetchPosts();
      
  },[])
  console.log(videos);

  return (
    <div className="App">
      <div className='app_videos'>
        {
          videos.map(
            ({url, discription, song, likes, messages, channel, shares})=>(
            <Video url={url} channel={channel} discription={discription} song={song} likes={likes} messages={messages} shares={shares}/>
            ))
        }
        {/* <Video url='https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761' channel='Anish' discription="TikTok mern" song="React.js" likes={100} messages={50} shares={20}/>
        <Video url='https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761' channel='Anish' discription="TikTok mern" song="React.js" likes={100} messages={50} shares={20}/> */}
      </div>
    </div>
  );
}

export default App;
