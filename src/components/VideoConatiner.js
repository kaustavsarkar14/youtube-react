import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { BASE_URL } from '../Constants'
import { useDispatch } from 'react-redux'
import VideoSkeleton from './VideoSkeleton'

const VideoConatiner = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    // fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=18&key=${process.env.REACT_APP_API_KEY}`)
    //   .then(data => data.json())
    //   .then(data => {
    //     setVideos(data.items)
    //     setLoading(false)
    //   })
  }, [])
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
        {
          videos.map(video => <VideoCard key={video.id} video={video} />)
        }
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
        {
          isLoading && Array(28).fill().map(()=><VideoSkeleton/>)
        }
      </div>
    </>
  )
}

export default VideoConatiner