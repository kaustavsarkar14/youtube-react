import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setAppLoading, toggleSideBar, toggleTheme } from '../redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isSuggestionsVisible, setSuggestionVisible] = useState(false)
  const isDarkMode = useSelector(state => state.app.isDarkMode)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputBox = useRef()
  
  function handleSearch() {
    dispatch(setAppLoading(true))
    if (searchInput == '') return
    navigate(`/results?search_query=${searchInput}`)
  }
  function searchFromSuggestion(searchTerm) {
    setSearchInput(searchTerm)
    setSuggestionVisible(false)
    navigate(`/results?search_query=${searchTerm}`)
  }

  function fetchSuggestions() {
    fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchInput}`)
      .then(data => data.json())
      .then(data => setSuggestions(data[1]))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions()
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  }, [searchInput])

  function closeSuggestions(e) {
    if (!inputBox.current.contains(e.target)) {
      setSuggestionVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', closeSuggestions)
    return () => {
      document.removeEventListener('click', closeSuggestions)
    }
  })
  return (
    <div className='flex justify-between items-center py-3 px-4 sticky top-0 z-10 bg-white h-12 dark:bg-[#0f0f0f] dark:text-white'>
      <div className='flex gap-4 items-center justify-start w-56' >
        <MenuIcon onClick={() => dispatch(toggleSideBar())} />
        <Link to={"/"} ><img className='h-5 hidden sm:block' src={isDarkMode ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"} alt="" /></Link>
      </div>
      <div ref={inputBox} >
        <div className='flex items-center justify-between'>
          <div className='flex flex-1'>
            <input
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className='w-[14rem] border border-gray-400 rounded-l-full p-1 px-4 sm:w-[30rem] dark:bg-[#0f0f0f]'
              type="text"
              placeholder='search...'
              onFocus={() => setSuggestionVisible(true)}
            />
            <button
              onClick={handleSearch}
              className='bg-slate-100 p-1 px-4 rounded-r-full border border-gray-400 border-l-0 border-collapse dark:bg-[#222222]' ><SearchIcon /></button>
          </div>
          <button className='bg-slate-100 p-1 rounded-full border border-gray-400 ml-4 dark:bg-[#222222] hidden sm:block' ><MicIcon /></button>
        </div>
        {(isSuggestionsVisible && suggestions.length != 0) &&
          <div className='px-4 p-1 fixed top-[3rem] shadow-md rounded-lg  w-[14rem] sm:w-[30rem] bg-white dark:bg-[#222222]' >
            {
              suggestions.map((el, i) => <h1 key={i} className='cursor-default my-2' onClick={e => searchFromSuggestion(e.target.innerText)} > <SearchIcon className='opacity-70' /> {el}</h1>)
            }
          </div>}
      </div>
      <div className='flex justify-end items-center gap-4 w-56'>
        <Brightness4Icon onClick={() => dispatch(toggleTheme())} />
        <div className='hidden sm:block'><VideoCallOutlinedIcon /></div>
        <div className='hidden sm:block'><NotificationsNoneIcon /></div>
        <div className='hidden sm:block'><AccountCircleIcon /></div>
      </div>


    </div>
  )
}

export default Header