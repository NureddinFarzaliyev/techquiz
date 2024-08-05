import React from 'react'
import logoutIcon from '../../assets/logout.svg'
import editIcon from '../../assets/edit.svg'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Level } from '../user/UserUtils'
import { useState } from 'react'
import '../user/user.css'
import shareIcon from '../../assets/share.svg'
import {Link} from 'react-router-dom'

function BasicProfile( {imageUrl, userData, setIsEditOpen} ) {

    const [isOpen, setIsOpen] = useState(false)


    const handleLogOut = () => {
        localStorage.removeItem("userId")
        location.reload()
    } 
    
  return (
    <div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/70" />
            <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="bg-second-bg shadow-2xl rounded-lg w-64 py-8 flex flex-col items-center">

                    <img src={imageUrl} alt="avatar" className={`h-32 w-32 shadow-2xl border-2 rounded-full ${Level(userData.points).label}Border ${Level(userData.points).label}Shadow object-cover`} />
                    <h1 className='text-white text-big-font mt-3 font-bold'>{userData.username}</h1>
                    <span className='text-white text-sm-font'>{Level(userData.points).label}</span>
                    <span className='text-second-text text-sm-font'>{userData.points} Points</span>

                    <div className='mt-10 w-full flex justify-around'>
                        <button onClick={() => {setIsEditOpen(true)}}> 
                            <img src={editIcon} alt="Edit" className='h-8' /> 
                        </button>
                        <button onClick={() => {location.reload()}}>
                            <Link to={`/${userData.username}`}> 
                                <img src={shareIcon} alt="noo" className='h-8' />
                            </Link>
                        </button>
                        <button onClick={() => {handleLogOut()}} >
                            <img src={logoutIcon} alt="Logout" className='h-8' />
                        </button>     
                    </div>

                </DialogPanel>
            </div>
        </Dialog>

        <button onClick={() => {setIsOpen(true)}}>
            <img src={imageUrl} alt="avatar" className={`h-12 w-12 ${Level(userData.points).label}Border shadow-2xl border-2 rounded-full object-cover`} />
        </button>
    </div>
  )
}

export default BasicProfile