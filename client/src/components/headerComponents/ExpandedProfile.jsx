import React, { useState } from 'react'
import { isImage } from '../../Utils'

function ExpandedProfile( { userData,  imgUrl}) {

    const [newUsername, setNewUsername] = useState('')
    const [changeUsernameStatus, setChangeUsernameStatus] = useState('Change Username')

    const [profilePicture, setProfilePicture] = useState()
    const [profileBtnStatus, setProfileBtnStatus] = useState('Change Profile Picture')
    const [registerStatus, setRegisterStatus] = useState('')


    const changeUsername = () => {
        if(newUsername != '' && newUsername){
            setChangeUsernameStatus('Loading...')
            console.log("Username change request sent for", newUsername)

            fetch(`${import.meta.env.VITE_BASE_URL}/user/username/${localStorage.getItem("userId")}`, {
                method: "PUT",
                body: JSON.stringify({
                    "newUsername": newUsername
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(data => {console.log(data); location.reload()})

        }
    }

    const handleImageUpload = (e) => {
        if(!isImage(e.target.files[0])){
            setRegisterStatus("File type is not supported")
            e.target.value = ''
        }
        else if(e.target.files[0].size > 1600000){
            setRegisterStatus('File is too big')
            e.target.value = ''
        }else{
            console.log('image uploaded')
            // setButtonState(true)
            setProfilePicture(e.target.files[0])
        }
    }

    const changeProfile = () => {
        if(profilePicture != undefined && profilePicture != ''){
            setProfileBtnStatus('Loading...')

            const newImageData = new FormData();

            newImageData.append("profilePicture", profilePicture)

            try{
                fetch(`${import.meta.env.VITE_BASE_URL}/user/picture/${localStorage.getItem("userId")}`, {
                    method: "PUT",
                    body: newImageData
                }).then(response => response.json()).then(data => {
                    console.log(data)
                    location.reload()
                })
            }catch(error){
                console.log(error)
            }

        }
    }

    
    return (
        <div className='border-orange-900 border-solid border-8'>
            <img src={imgUrl} alt="avatar" className='h-20' />
            <h1 className='text-2xl font-bold'>{userData.username}</h1>
            <p className='text-xl font-semibold'>{userData.points}pts</p>

            <div>
                <input type="text" onChange={(e) => { setNewUsername(e.target.value) } } placeholder='Change Username' />
                <button onClick={() => {changeUsername()}} >{changeUsernameStatus}</button>
            </div>

            <div>
                <input type="file" accept="image/*" onChange={(e) => {handleImageUpload(e)}} />
                <button onClick={() => {changeProfile()}}>{profileBtnStatus}</button>
                <p>{registerStatus}</p>
            </div>
        </div>
    )
}

export default ExpandedProfile