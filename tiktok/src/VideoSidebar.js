import React, { useState } from 'react'
import './videoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function VideoSidebar({likes, messages, shares}) {
    const [liked, setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_button'>
            {liked? (<FavoriteIcon fontSize='large' onClick={(e)=>{setLiked(false)}}/>)
            : (<FavoriteBorderIcon fontSize='large' onClick={(e)=>{setLiked(true)}} />
            )}
            <p>{liked? Number(likes)+1 : likes}</p>
            
        </div>
        <div className='videoSidebar_button'>
            <MessageIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar_button'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}
