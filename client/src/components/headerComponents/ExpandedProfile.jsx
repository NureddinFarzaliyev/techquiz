import React, { useState } from 'react'

function ExpandedProfile( { userData,  imgUrl}) {

    const [newUsername, setNewUsername] = useState('')


    const changeUsername = () => {


        if(newUsername != ''){

            fetch(`${import.meta.env.VITE_BASE_URL}/user/username/${localStorage.getItem("userId")}`, {
                method: "PUT",
                body: {
                    "newUsername": newUsername
                }
            }).then(response => response.json()).then(data => console.log(data))

        }else{
            console.log('please...')
        }


    }




    return (
        <div className='border-orange-900 border-solid border-8'>
            <img src={imgUrl} alt="avatar" className='h-20' />
            <h1 className='text-2xl font-bold'>{userData.username}</h1>
            <p className='text-xl font-semibold'>{userData.points}pts</p>

            <div>
                <input type="text" onChange={(e) => { setNewUsername(e.target.value) } } placeholder='Change Username' />
                <p>{`New Username: ${newUsername}`}</p>
                <button onClick={() => {changeUsername()}} >Change Username</button>
            </div>
        </div>
    )
}

export default ExpandedProfile