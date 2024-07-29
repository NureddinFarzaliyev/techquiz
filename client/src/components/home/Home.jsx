import React from 'react'
import Container from '../Container'
import SectionF from './SectionF'
import SectionS from './SectionS'
import SectionT from './SectionT'
import './home.css'
 
  
function Home() {

  const isLoggedIn = localStorage.getItem("userId")
  console.log(isLoggedIn)

  if(isLoggedIn == null){

    return (
      <>
        <SectionF />
        <SectionS />
        <SectionT />
      </>
    ) 
  }else{
    return(<Container />)
  }

}

export default Home