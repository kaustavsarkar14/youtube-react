import React from 'react'

const VideoSkeleton = () => {
    return (
        <div className='h-56  w-full'>
            <div className='rounded-md h-36 w-full bg-gray-100 dark:bg-[#222222]' ></div>
            <div className='flex gap-3 pt-2'>
                <div className='w-8 h-8 rounded-full bg-gray-100 dark:bg-[#222222]' ></div>
                <div>
                    <h1 className='font-medium text-sm bg-gray-100 dark:bg-[#222222] flex-1 text-gray-100 dark:text-[#222222]' >----------------------------------------</h1>
                    <h2 className='text-xs opacity-80 bg-gray-100 dark:bg-[#222222]  text-gray-100 dark:text-[#222222]'>ccc</h2>
                    <p className='text-xs opacity-80 bg-gray-100 dark:bg-[#222222]  text-gray-100 dark:text-[#222222]' >cccc</p>
                </div>
            </div>
        </div>
    )
}

export default VideoSkeleton