import React from 'react'
import ProgressBarComponent from './ProgressBarComponent'
import { Fade } from 'react-awesome-reveal'

function UserPageProfile( {imageUrl, userLevel, userData} ) {
  return (
    <Fade>
    <section className='absolute left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex flex-col items-center'>
            <img src={imageUrl} className={`${userLevel.label}Border ${userLevel.label}Shadow border-4 w-44 h-44 sm:w-72 sm:h-72 rounded-full object-cover`} />
            <h1 className="text-white text-xbig-font drop-shadow-md mt-7">{userData.username}</h1>
            <p className='text-big-font text-second-text mt-[-20px]'>{`${userLevel.label}`}</p>
            <ProgressBarComponent data={userLevel} />
        </div>
    </section>
    </Fade>
  )
}

export default UserPageProfile
