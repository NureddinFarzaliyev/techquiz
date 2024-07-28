import React from 'react'
import gear from '../../assets/gear.png'
import Source from './homeComponents/Source'
import './home.css'
import Fade from 'react-reveal/Fade'

function SectionF() {
  return (
    <section className='h-dvh bg-main-bg relative flex justify-center items-center'>
      
      <Source/>

      <div className='z-0 pointer-events-none absolute animateSpin gearDiv left-[-20rem] top-[-20rem] '>
        <img src={gear} alt="gear"/>
      </div>


      <div className='z-40 relative flex flex-col items-center justify-around h-dvh'>

        <Fade>
        <div>
          <h1 className='font-display text-white drop-shadow-lg text-xbig-font md:text-xxbig-font font-bold'>TechQuiz</h1>
          <p className='text-second-text text-center mt-[-1rem] md:mt-[-2rem] text-xs-font'> Made by <a href='https://www.github.com/nureddinfarzaliyev'> <u> Nureddin Farzaliyev </u> </a> </p>
        </div>

        <div>
          <p className='text-center text-med-font w-72 md:w-96 text-white'>Quiz application to test your skills in different topics of technology.</p>
        </div>

        <div className='flex flex-col items-center'>
          <a href="#secondSection">
            <button className='bg-main-accent hover:bg-second-accent hover:scale-105 transition-all rounded-md shadow-lg py-3 font-display font-bold text-med-font w-80'> Get Started </button>
          </a>
          <p className='text-second-text text-sm-font'> <i> Scroll Down To See More </i> </p>
        </div>
        </Fade>

      </div>


    </section>
  )
}

export default SectionF