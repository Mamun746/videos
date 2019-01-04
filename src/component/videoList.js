import React from 'react'
import VideoItem from './videoItem'

const VideoList=({videos,onVideoSelect})=>{
    const renderVideoList=videos.map((video)=>{
        
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/> 
    })
    return(
        <div>
        <div className="ui relaxed divided list">
        {renderVideoList}
        </div>
        </div>
    )
}

export default VideoList