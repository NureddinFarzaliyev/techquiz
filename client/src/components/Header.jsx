import React, { useEffect, useState } from 'react'

function Header() {

    const [userData, setUserData] = useState('')

    const handleLogOut = () => {
        console.log('Logged out')
        localStorage.removeItem("userId")
        location.reload()
    } 

    const fetchUserData = () => {
        const userId = localStorage.getItem('userId')
        if(userId){
            try{
                fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`)
                .then(response => response.json())
                .then(data => setUserData(data))
            }catch(error){
                console.log(error)
            }
        }
    }


    useEffect(() => {
        fetchUserData();
        console.log(userData.profilePicture)
    }, [])


    return (
        <div>
            <h1 className='text-red-700 text-3xl'>TechQuiz</h1>


            <div>
                <h1 className='text-2xl font-bold'>{userData.username}</h1>
                <p className='text-xl font-semibold'>{userData.points}pts</p>
            </div>

            <div>
                <button onClick={() => {handleLogOut()}}>Log out</button>
            </div>
        </div>
    )
}

export default Header