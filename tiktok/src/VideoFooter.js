import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
//import Ticker from 'react-ticker';
import Marquee from 'react-fast-marquee'
import AlbumIcon from '@mui/icons-material/Album';
//import Icon from '@mui/material/Icon';

export default function VideoFooter({channel, discription, song}) {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{discription}</p>
        <div className="videoFooter_ticker">
            <MusicNoteIcon className='videoFooter_icon' />
            <Marquee className='marquee' gradientColor="false" speed={20}>
                <p>{song}</p>
            </Marquee>
        </div>
      </div>
      <div className="videoFooter_record">
        <AlbumIcon fontSize='large'/>
      </div>
    </div>
  )
}
