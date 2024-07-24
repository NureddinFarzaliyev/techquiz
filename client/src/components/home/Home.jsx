import React from 'react'
import Container from '../Container'
import Auth from './Auth'

function Home() {

  const isLoggedIn = localStorage.getItem("userId")
  console.log(isLoggedIn)

  if(isLoggedIn == null){
    return (<Auth/>) 
  }else{
    return(<Container />)
  }

}

export default Home