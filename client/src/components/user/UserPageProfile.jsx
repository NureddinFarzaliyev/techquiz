import React from 'react'
import ProgressBarComponent from './ProgressBarComponent'
import { Fade } from 'react-awesome-reveal'
import './user.css'

function UserPageProfile( {imageUrl, userLevel, userData} ) {
  return (
    <section className='h-dvh w-full flex items-center justify-center'>
        <div className='userCardGradient p-10 px-5 mt-14 md:px-10 md:py-16 gap-5 md:gap-16 rounded-xl shadow-xl flex-col md:flex-row items-center flex '>
        <Fade>
            <img src={imageUrl} className={`${userLevel.label}Border ${userLevel.label}Shadow border-4 w-44 h-44 sm:w-64 sm:h-64 rounded-full object-cover`} />
            <div className='flex md:block flex-col items-center'>
              <h1 className=" text-white text-center md:text-left text-big-font md:text-xbig-font drop-shadow-md w-72 md:w-96">{userData.username}</h1>
              <p className='text-med-font md:text-big-font text-center md:text-left text-second-text mt-[-10px] md:mt-[-20px]'>{`${userLevel.label}`}</p>
              <ProgressBarComponent data={userLevel} />
            </div>
        </Fade>
        </div>
    </section>
  )
}

export default UserPageProfile
