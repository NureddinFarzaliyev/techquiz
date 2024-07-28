import React from 'react'
import github from '../../../assets/github.png'

function Source() {
  return (
    <a className='flex z-20 py-2 px-1 align-center bg-black w-44 shadow-sm text-sm-font text-white justify-around rounded-md hover:scale-105 transition-transform absolute right-10 top-5' href='https://www.github.com/nureddinfarzaliyev/techquiz' target='_blank'>
        <img src={github} alt="Github" />
        <h1>Source Code</h1>
    </a>
  )
}

export default Source