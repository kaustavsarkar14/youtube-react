import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants'
import ResultCard from './ResultCard'
import { useSearchParams } from 'react-router-dom'

const ResultContainer = () => {
    const [searchData, setSearchData] = useState([])
    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get('search_query')
    
    useEffect(()=>{
        fetch(`${BASE_URL}/search?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&maxResults=${4}&part=snippet`)
        .then(data=>data.json())
        .then(data=>setSearchData(data.items))
    },[])
  return (
    <div className='flex items-center flex-col gap-3 pt-2' >
        {
            searchData.map(video=><ResultCard key={video.id} video={video} />)
        }
    </div>
  )
}

export default ResultContainer