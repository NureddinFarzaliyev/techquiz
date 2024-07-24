import React, { useEffect, useState } from 'react'

function QuizHeader() {

    const [userData, setUserData] = useState('');

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
    }, [])

    return (
        <div>
            <h1>{userData.username}</h1>
            <p>{userData.points}</p>
        </div>
    )
}

export default QuizHeader