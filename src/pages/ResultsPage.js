import React from 'react'
import SideBar from '../components/SideBar'
import ResultContainer from '../components/ResultContainer'

const ResultsPage = () => {
  return (
    <div className='flex w-full'>
        <SideBar/>
        <ResultContainer/>
    </div>
  )
}

export default ResultsPage