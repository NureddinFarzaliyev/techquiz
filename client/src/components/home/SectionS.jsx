import React from 'react'
import gear from '../../assets/gear2.png'
import './home.css'
import GetStarted from './homeComponents/GetStarted'
import ChangingIcons from './homeComponents/ChangingIcons'

function SectionS() {
  return (
    <section id='secondSection' className='h-dvh bg-main-bg w-dvw relative pt-12 drop-shadow-md md:pt-0 px-12 md:px-16'>

      <div className='gearDiv animateSpin invisible pointer-events-none md:visible absolute right-[-20rem] top-[-23rem]'>
        <img src={gear} alt="gear" height={100}/>
      </div>

      <div className='md:grid grid-cols-5 flex flex-col relative z-10'>

        <GetStarted />
        <ChangingIcons className="" />

      </div>

    </section>
  )
}

export default SectionS