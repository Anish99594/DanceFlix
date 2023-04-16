import React, { useRef, useState } from 'react'
import './video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

export default function Video({url, channel, discription, song, likes, messages, shares}) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleVideoPress = ()=>{
    if(playing)
    {
      videoRef.current.pause();
      setPlaying(false)
    }
    else
    {
      videoRef.current.play();
      setPlaying(true)
    }
  }
  return (
    <div className='video'>
        <video onClick={handleVideoPress} ref={videoRef} className='video_player' src={url} loop>

        </video>
        <VideoFooter channel={channel} discription={discription} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  )
}
