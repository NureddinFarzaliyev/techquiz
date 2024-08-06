import React, { useReducer, useState } from 'react'
import { isImage } from '../../Utils'
import uploadImg from '../../assets/upload.svg'

import { getStatusText } from '../../Utils'

function ExpandedProfile() {

    const [editData, setEditData] = useState({
        newUsername: '',
        picture: null,
        status: 'init', // loading, err-same, filetype, filesize
    })

    const changeUsername = async () => {
        if(editData.newUsername != '' && editData.newUsername){
            setEditData({...editData, status: 'loading'})

            fetch(`${import.meta.env.VITE_BASE_URL}/user/username/${localStorage.getItem("userId")}`, {
                method: "PUT",
                body: JSON.stringify({
                    "newUsername": editData.newUsername
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(data => {
                if(data == 'userexists'){
                    setEditData({...editData, status: 'err-same'})
                }else{
                    location.reload()
                }
            })

        }
    }

    const handleImageUpload = (e) => {
        if(!isImage(e.target.files[0])){
            setEditData({...editData, status: 'filetype'})
            e.target.value = ''
        }
        else if(e.target.files[0].size > 1600000){
            setEditData({...editData, status: 'filesize'})
            e.target.value = ''
        }else{
            setEditData({...setEditData, picture: e.target.files[0]})
        }
    }

    const changeProfile = () => {
        if(editData.picture != null){
            setEditData({...editData, status: 'loading'})

            const newImageData = new FormData();

            newImageData.append("profilePicture", editData.picture)

            try{
                fetch(`${import.meta.env.VITE_BASE_URL}/user/picture/${localStorage.getItem("userId")}`, {
                    method: "PUT",
                    body: newImageData
                }).then(response => response.json()).then(data => {
                    location.reload()
                })
            }catch(error){
                console.log(error)
            }

        }
    }

    const {newUsername, picture, status} = editData
    
    return (
        <div className='p-4'>
            <h1 className='text-white text-big-font'>Edit</h1>

            <div className='flex flex-col'>
                <input className='rounded px-3 h-8 mt-7' type="text" value={newUsername} onChange={(e) => { setEditData({...editData, newUsername: e.target.value.replace(/\s/g, ''), status: 'init'}) } } placeholder='Change Username' />
                <button className='mt-3 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={() => {changeUsername()}} >{status === 'loading' ? 'Loading...' : "Change Username"}</button>
            </div>

            <div className='flex flex-col'>
                <label className='cursor-pointer flex-col md:flex-row items-center flex gap-3 md:gap-6 ml-1 mt-7 text-white'>
                    <input className='hidden' type="file" accept="image/*" onChange={(e) => { handleImageUpload(e) }} />
                    <div className='bg-white h-16 md:h-10 w-16 md:w-10 rounded-full flex justify-center items-center shadow-xl hover:bg-second-text transition-all'>
                        <img src={uploadImg} alt="upload" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-sm-font font-bold'>Upload a Profile Picture</h1>
                        <i className='text-xs-font text-second-text'>{picture === null ? 'No file selected.' : picture.name}</i>
                    </div>
                </label>
                <button className='mt-7 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={() => {changeProfile()}}>{status === 'loading' ? 'Loading...' : "Change Profile Picture"}</button>
                <p className='text-center mt-3 text-white font-bold'>{getStatusText(status)}</p>
            </div>
        </div>
    )
}

export default ExpandedProfile