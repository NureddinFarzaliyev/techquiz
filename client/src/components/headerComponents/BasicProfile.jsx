import React from 'react'
import logoutIcon from '../../assets/logout.svg'
import editIcon from '../../assets/edit.svg'
import {useNavigate, Link} from 'react-router-dom'
import { Level } from '../user/UserUtils'
import { Fade } from 'react-awesome-reveal'

function BasicProfile( {imageUrl, userData, setIsEditOpen} ) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("userId")
        navigate('/')
        location.reload()
    } 

  return (
    <Fade>
    <div className='gap-2 flex items-end relative'>
        <button onClick={() => {setIsEditOpen(true)}} className='opacity-75 hover:opacity-100 transition-all bg-main-accent p-2 rounded-full absolute right-[-5px] bottom-[-5px]' > <img className='h-4' src={editIcon} alt="Edit" /> </button>
        <button onClick={() => {handleLogOut()}} className='opacity-50 hover:opacity-100 mt-[-1.5rem] transition-all pb-1' > <img src={logoutIcon} alt="Logout" /> </button>
        <div className='mr-4'>
            <h1 className='text-2xl text-right text-white text-med-font font-bold'>{userData.username}</h1>
            <p className='text-xl text-right font-semibold text-sm-font text-second-text'>{Level(userData.points).label} ({userData.points})</p>
        </div>
        <Link to={`/${userData.username}`}>
          <img src={imageUrl} alt="avatar" className={`h-16 shadow-2xl ${Level(userData.points).label}Border border-2 w-16 rounded-full object-cover`} />
        </Link>
    </div>
    </Fade>
  )
}

export default BasicProfile