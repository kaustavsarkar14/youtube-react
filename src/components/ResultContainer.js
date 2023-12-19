import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants'
import ResultCard from './ResultCard'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAppLoading } from '../redux/appSlice'

const ResultContainer = () => {
  const [searchData, setSearchData] = useState([])
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search_query')
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("first")
    fetch(`${BASE_URL}/search?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&maxResults=${4}&part=snippet&type=video`)
      .then(data => data.json())
      .then(data => {
        setSearchData(data.items)
        dispatch(setAppLoading(false))
      })
  }, [searchParams])
  return (
    <div className='flex items-center flex-col gap-3 pt-2 px-2 sm:px-0 min-h-screen' >
      {
        searchData.map(video => <ResultCard key={video.id} video={video} />)
      }
    </div>
  )
}

export default ResultContainer