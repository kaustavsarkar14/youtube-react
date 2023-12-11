import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner'

const MainContainer = () => {
  return (
    <div className='flex flex-col flex-1 overflow-auto p-4'>
      <ButtonList />
      <VideoConatiner />
    </div>
  )
}

export default MainContainer