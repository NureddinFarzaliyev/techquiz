import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import { fetchUserData } from '../Utils';

function UserPage() {

    const params = useParams();

    const [userData, setUserData] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        fetchUserData(setUserData, setImageUrl, null, params.username)
    }, [])

    return (
        <>
        <Header/>  
        <section className='mt-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-col items-center'>
                <img src={imageUrl} className='border-white shadow-2xl border-2 w-44 h-44 sm:w-72 sm:h-72 rounded-full object-cover' />
                <h1 className="text-white text-xbig-font drop-shadow-md mt-4">{userData.username}</h1>
                <p className='text-big-font text-second-text mt-[-20px]'>{userData.points}</p>
            </div>
        </section>
        </>
    )

}

export default UserPage