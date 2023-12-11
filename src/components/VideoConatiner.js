import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { BASE_URL } from '../Constants'
import { useDispatch } from 'react-redux'
import { setAppLoading } from '../redux/appSlice'

const VideoConatiner = () => {
  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()
  
  useEffect(()=>{
    fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=18&key=${process.env.REACT_APP_API_KEY}`)
    .then(data=>data.json())
    .then(data=>{
      setVideos(data.items)
    })
  },[])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
      {
        videos.map(video=><VideoCard key={video.id} video={video} />)
      }
    </div>
  )
}

export default VideoConatiner