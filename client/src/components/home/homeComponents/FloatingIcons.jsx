import React from 'react'
import icon1 from '../../../assets/techicon1.svg'
import icon2 from '../../../assets/techicon2.svg'
import icon3 from '../../../assets/techicon3.svg'
import icon4 from '../../../assets/techicon4.svg'
import icon5 from '../../../assets/techicon5.svg'
import '../home.css'

function FloatingIcons() {
  return (
    <div className='ml-10 md:ml-0 mt-[-1rem] md:mt-16 w-full relative'>
        <img src={icon1} alt="icon1" className='drop-shadow-2xl absolute top-14 left-3 sm:left-16 md:left-20 float1' />
        <img src={icon2} alt="icon2" className='drop-shadow-2xl absolute top-28 left-32 sm:left-96 md:left-80 float2'/>
        <img src={icon3} alt="icon3" className='drop-shadow-2xl absolute top-48 left-3 sm:left-52 md:left-40 float3'/>
        <img src={icon4} alt="icon4" className='drop-shadow-2xl absolute top-64 sm:top-[22rem] left-32 sm:left-32 md:left-28 float4'/>
        <img src={icon5} alt="icon5" className='drop-shadow-2xl absolute top-80 sm:top-96 left-18 sm:left-72 md:left-80 float5'/>
    </div>
  )
}

export default FloatingIcons