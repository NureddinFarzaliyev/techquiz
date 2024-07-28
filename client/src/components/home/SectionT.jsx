import React from 'react'
import DetailsText from './homeComponents/DetailsText'
import FloatingIcons from './homeComponents/FloatingIcons'
import './home.css'

function SectionT() {
  return (
    <section id="thirdSection" className='h-[102vh] mt-[5vh] bg-main-bg px-7 pt-5 w-dvw relative md:flex'>

      <DetailsText />


      <FloatingIcons />


    </section>

  )
}

export default SectionT