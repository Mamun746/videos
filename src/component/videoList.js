import React from 'react'
import VideoItem from './videoItem'

const VideoList=({videos})=>{
    const renderVideoList=videos.map((video)=>{
        return <VideoItem video={video}/> 
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