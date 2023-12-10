import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants'
import { formatViewCount } from '../utils/utilFunctions'


const ResultCard = ({ video }) => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videoDetails, setVideoDetails] = useState(null)
 
  useEffect(() => {
    fetch(`${BASE_URL}/channels?key=${process.env.REACT_APP_API_KEY}&part=snippet&id=${video.snippet.channelId}`)
      .then(data => data.json())
      .then(data => setChannelDetails(data))

    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&id=${video.id.videoId}`)
      .then(data => data.json())
      .then(data => setVideoDetails(data))
  }, [])
  // console.log("video", video)
  // console.log("videodetails", videoDetails)
  // console.log("channel", channelDetails)

  return (
    <div className='flex w-[85%] gap-3'>
    <img className='rounded-md' src={video && video.snippet.thumbnails.medium.url} alt="" />
    <div>
      <h1 className='font-semibold mb-2' >{video && video.snippet.title}</h1>
      <p className='text-xs opacity-80' >
        {videoDetails && videoDetails.items && videoDetails.items[0]?.statistics?.viewCount} views
        {videoDetails && videoDetails.items && videoDetails.items[0]?.snippet?.publishedAt} ago
      </p>

      <div className='flex gap-3 my-3 items-center'>
        <img className='w-8 rounded-full h-fit' src={channelDetails && channelDetails.items && channelDetails.items[0].snippet.thumbnails.medium.url} alt="" />
        <h2 className='text-xs opacity-80' >{video && video.snippet.channelTitle}</h2>
      </div>
      <p className='text-xs opacity-80' >{video && video.snippet.description}</p>
    </div>
  </div>
  )
}

export default ResultCard