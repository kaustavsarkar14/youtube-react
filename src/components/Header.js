import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../redux/appSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSearch() {
    if (searchInput == '') return
    navigate(`/results?search_query=${searchInput}`)
  }

  useEffect(() => {
    fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchInput}`)
      .then(data => data.json())
      .then(data => setSuggestions(data[1]))
  }, [searchInput])

  return (
    <div className='flex justify-between py-3 px-4 sticky top-0 z-10 bg-white'>
      <div className='flex gap-4 items-center justify-start w-56' >
        <MenuIcon onClick={() => dispatch(toggleSideBar())} />
        <img className='h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <input value={searchInput} onChange={e => setSearchInput(e.target.value)} className='border border-gray-400 rounded-l-full p-1 px-4 w-[30rem]' type="text" placeholder='search...' />
          <button onClick={handleSearch} className='bg-slate-100 p-1 px-4 rounded-r-full border border-gray-400 border-l-0 border-collapse' ><SearchIcon /></button>
        </div>
        <button className='bg-slate-100 p-1 rounded-full border border-gray-400 ml-4' ><MicIcon /></button>
      </div>
      <div className='flex justify-end items-center gap-4 w-56'>
        <VideoCallOutlinedIcon />
        <NotificationsNoneIcon />
        <AccountCircleIcon />
      </div>

      <div >
        {
          suggestions.map(el => <h1>{el}</h1>)
        }
      </div>
    </div>
  )
}

export default Header