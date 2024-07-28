import React from 'react'
import Fade from 'react-reveal/Fade'

function DetailsText() {
  return (
    <Fade>
    <div className='text-white md:w-[75vw] lg:w-[140vw]'>
        <h1 className='font-display text-big-font md:text-xbig-font font-bold'>TechQuiz</h1>
        <p className='text-sm-font md:text-med-font mt-1 md:mt-10'>“TechQuiz” is a <b>MERN Stack</b> Project.</p>
        <p className='text-sm-font md:text-med-font mt-1 md:mt-10'>Registered user data are saved on <b>MongoDB</b>. I've created <b>REST API</b> using <b>Node.js</b> (express) to communicate with database. I've used quizAPI to fetch questions in different topics.</p>
        <p className='text-sm-font md:text-med-font mt-1 md:mt-10'><b>React.js</b> and <b>Tailwindcss</b> is used to build client-side of the project.</p>
    </div>
    </Fade>
  )
}

export default DetailsText