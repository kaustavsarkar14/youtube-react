import React from 'react'
import SideBar from '../components/SideBar'
import MainContainer from '../components/MainContainer'

const HomePage = () => {
    return (
        <div className='flex w-full h-screen'>
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default HomePage