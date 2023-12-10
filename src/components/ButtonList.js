import React from 'react'


const buttonTypes = ["All", "Gaming", "Music", "React", "React router", "Data structures", "Photoshop", "JavaScript", "Music", "Bgmi", "Top PC Games", "Redux", "Adobe", "Front-end", "Music", "React", "React router", "Data structures", "Photoshop", "JavaScript", "GTA VI"]

const ButtonList = () => {
  return (
    <div className='w-full mb-3 max-w-full flex overflow-scroll scrollbar-hidden whitespace-nowrap gap-2' >
      {
        buttonTypes.map((button, i) => <button key={i} className='p-1 px-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-[#222222] dark:text-white' >{button}</button>)
      }
    </div>
  )
}

export default ButtonList