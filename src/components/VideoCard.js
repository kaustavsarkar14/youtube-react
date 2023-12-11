import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants'
import { formatViewCount } from '../utils/utilFunctions'

const VideoCard = ({ video }) => {
  const [channelDetails, setChannelDetails] = useState(null)
  useEffect(() => {
    fetch(`${BASE_URL}/channels?key=${process.env.REACT_APP_API_KEY}&part=snippet&id=${video.snippet.channelId}`)
      .then(data => data.json())
      .then(data => setChannelDetails(data))
  }, [])

  return (
    <div className=''>
      <img className='rounded-md w-full' src={video.snippet.thumbnails.medium.url} alt="" />
      <div className='flex gap-3 pt-2'>
        <img className='w-8 rounded-full h-fit' src={channelDetails && channelDetails.items[0].snippet.thumbnails.medium.url} alt="" />
        <div>
          <h1 className='font-medium text-sm' >{video.snippet.title.slice(0, 170) + "..."}</h1>
          <h2 className='text-xs opacity-80'>{video.snippet.channelTitle}</h2>
          <p className='text-xs opacity-80' >{formatViewCount(video.statistics.viewCount)} views</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard