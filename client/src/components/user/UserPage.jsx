import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import { fetchUserData } from '../Utils';
import NonUserHeader from './NonUserHeader';
import { Level } from '../Utils';
import ProgressBar from './ProgressBar';

function UserPage() {

    const params = useParams();

    const [userData, setUserData] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [userLevel, setUserLevel] = useState('')

    useEffect(() => {
        fetchUserData(setUserData, setImageUrl, null, params.username)
    }, [])

    useEffect(() => {
        setUserLevel(Level(userData.points))
    }, [userData])

    return (
        <>
        { localStorage.getItem('userId') ? <Header/> : <NonUserHeader />}  
        <section className='absolute left-[50%] top-[52.5%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-col items-center'>
                <img src={imageUrl} className={`${userLevel.label}Border ${userLevel.label}Shadow border-4 w-44 h-44 sm:w-72 sm:h-72 rounded-full object-cover`} />
                <h1 className="text-white text-xbig-font drop-shadow-md mt-4">{userData.username}</h1>
                <p className='text-big-font text-second-text mt-[-20px]'>{`${userLevel.label} (${userData.points})`}</p>
                <ProgressBar data={userLevel} />
            </div>
        </section>
        </>
    )

}

export default UserPage