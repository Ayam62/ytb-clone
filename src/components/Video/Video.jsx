import React from 'react'
import PlayVideo from '../PlayVideo/PlayVideo'
import Recommended from '../Recommended/Recommended'
import "./Video.css"
import { useParams } from 'react-router'

const Video = () => {
    const{videoId,categoryId}=useParams();
  return (
    <div id="video" className='video'>
        <PlayVideo videoId={videoId} categoryId={categoryId}/>
        <Recommended/>
    </div>
  )
}

export default Video