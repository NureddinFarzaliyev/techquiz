import React, { useEffect } from 'react'
import './user.css'

function ProgressBarComponent( { data } ) {

  const {label, nextLevelPoints, points, currentLevelPoints } = data

  useEffect(() => {
    document.querySelector('.progressInner').style.width = `${(points - currentLevelPoints )/(nextLevelPoints - currentLevelPoints)*100}%`
  }, [data])


  return (
    <div className='text-white'>
        <div className={`bg-[rgba(255,255,255,.3)] w-52 sm:w-80 md:w-96 h-7 rounded-full ${label}SmallShadow mt-10 overflow-clip relative`}>
          <div className={`${label} h-7 progressInner rounded-full shadow-lg`}></div>       

          <div className='absolute top-[50%] font-bold translate-y-[-50%] text-sm-font left-[50%] translate-x-[-50%]'>
            {nextLevelPoints ? `${points}/${nextLevelPoints}` : `${points}`}
          </div>   
        </div>
    </div>
  )
}

export default ProgressBarComponent