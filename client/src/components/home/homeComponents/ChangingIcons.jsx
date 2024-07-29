import React, { useEffect } from 'react';
import {useState} from 'react'
import htmlImg from '../../../assets/HTML.svg'
import dockerImg from '../../../assets/Docker.svg'
import linuxImg from '../../../assets/Linux.svg'
import mysqlImg from '../../../assets/MySQL.svg'
import phpImg from '../../../assets/PHP.svg'
import pythonImg from '../../../assets/Python.svg'

function ChangingIcons() {

  const [imageIndex, setImageIndex] = useState(0)
  const [animState, setAnimState] = useState('')

  const icons = [htmlImg, mysqlImg, dockerImg, linuxImg, phpImg, pythonImg]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('fadeOut')
      setTimeout(() => {
        setAnimState('fadeIn')
        setImageIndex((i) =>  i+1 == icons.length ? 0 : i+1)
      }, 300);
    }, 2500);
    
    return() => clearInterval(interval)
  }, [])


  return (
    <div className='md:h-dvh mt-10 md:mt-0 col-span-2 drop-shadow-2xl flex justify-center items-center'>
      <img alt="html" className={`drop-shadow-2xl ${animState}`} src={icons[imageIndex]} />
    </div>
  )
}

export default ChangingIcons