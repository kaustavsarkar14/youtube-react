import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import { useSelector } from 'react-redux';


const SideBar = () => {
  const isSideBarOpen = useSelector(state => state.app.isSideBarOpen)
  if (!isSideBarOpen) return null
  return (
    <div className='w-[14%] p-3 h-full top-12 ' >
      <div className='flex items-center gap-4 p-2 rounded-lg bg-gray-100 dark:bg-[#222222]' >
        <HomeOutlinedIcon />
        <h3 className='text-sm'>Home</h3>
      </div>
      <div className='flex items-center gap-4 p-2 rounded-lg' >
        <SlideshowOutlinedIcon />
        <h3 className='text-sm'>Shorts</h3>
      </div>
      <div className='flex items-center gap-4 p-2 rounded-lg' >
        <OndemandVideoOutlinedIcon />
        <h3 className='text-sm'>Subscriptions</h3>
      </div>
      <div className='flex items-center gap-4 p-2 rounded-lg' >
        <PlayCircleOutlineOutlinedIcon />
        <h3 className='text-sm'>Music</h3>
      </div>
    </div>
  )
}

export default SideBar