import React, { useState } from 'react'
import { isImage } from '../../Utils'
import uploadImg from '../../assets/upload.svg'

function ExpandedProfile() {

    const [newUsername, setNewUsername] = useState('')
    const [changeUsernameStatus, setChangeUsernameStatus] = useState('Change Username')

    const [profilePicture, setProfilePicture] = useState()
    const [pictureStatus, setPictureStatus] = useState('No image selected.')
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
            setProfilePicture(e.target.files[0])
            setPictureStatus(e.target.files[0].name)
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
        <div className='p-4'>
            <h1 className='text-white text-big-font'>Edit</h1>

            <div className='flex flex-col'>
                <input className='rounded px-3 h-8 mt-7' type="text" onChange={(e) => { setNewUsername(e.target.value) } } placeholder='Change Username' />
                <button className='mt-3 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={() => {changeUsername()}} >{changeUsernameStatus}</button>
            </div>

            <div className='flex flex-col'>
                <label className='cursor-pointer flex-col md:flex-row items-center flex gap-3 md:gap-6 ml-1 mt-7 text-white'>
                    <input className='hidden' type="file" accept="image/*" onChange={(e) => { handleImageUpload(e) }} />
                    <div className='bg-white h-16 md:h-10 w-16 md:w-10 rounded-full flex justify-center items-center shadow-xl hover:bg-second-text transition-all'>
                        <img src={uploadImg} alt="upload" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-sm-font font-bold'>Upload a Profile Picture</h1>
                        <i className='text-xs-font text-second-text'>{pictureStatus}</i>
                    </div>
                </label>
                <button className='mt-7 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={() => {changeProfile()}}>{profileBtnStatus}</button>
                <p>{registerStatus}</p>
            </div>
        </div>
    )
}

export default ExpandedProfile