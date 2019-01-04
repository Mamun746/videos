import React from 'react'
import '../css/videoItem.css'

const VideoItem=({ video,onVideoSelect })=>{
    return(
        <div className="video-item item" onClick={()=>onVideoSelect(video)}>
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} alt="Mamun"/>
       <div className="content">
       <div className="header">{video.snippet.title}</div> 
       </div>
        </div>
    )
}

export default VideoItem