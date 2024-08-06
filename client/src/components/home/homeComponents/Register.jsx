import React from 'react'
import { useState } from 'react';
import { isImage } from '../../../Utils'
import uploadImg from '../../../assets/upload.svg'

function Register() {
    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        picture: null,
        pictureStatus: 'No image selected.',
        btnText: 'Register',
        status: '',
    }); 

    const registerUser = (username, password, profilePicture, e) => {
        e.preventDefault()

        if(username && password){
            const formData = new FormData()
    
            formData.append("username", username)
            formData.append("password", password)
            formData.append("points", 0)
            formData.append("profilePicture", profilePicture)
    
            try{
                setRegisterData({...registerData, btnText: 'Loading...'})
                fetch(`${import.meta.env.VITE_BASE_URL}/user/new`, {
                    method: "POST",
                    body: formData
                }).then(response => response.json()).then(data => {
                    setRegisterData({...registerData, btnText: "Register"})
                    if(typeof data == 'object'){
                        setRegisterData({...registerData, status: 'Registered Successfully. Please Login.'})
                    }else{
                        setRegisterData({...registerData, status: data})
                    }
                })
            }catch(error) {
                setRegisterData({...registerData, btnText: 'Register', status: "Error occured. Please try again."})
                console.log(error)
            }
        }else{
            setRegisterData({...registerData, btnText: 'Register', status: 'Please fill all the blanks.'})
        }


    }

    const handleImageUpload = (e) => {
        if(!isImage(e.target.files[0])){
            setRegisterData({...registerData, status: "File type is not supported"})
            e.target.value = ''
        }
        else if(e.target.files[0].size > 1600000){
            setRegisterData({...registerData, status: 'File is too big'})
            e.target.value = ''
        }else{
            setRegisterData({...registerData, picture: e.target.files[0], pictureStatus: e.target.files[0].name})
        }
    }


  return (
    <div className='flex flex-col sm:w-[15rem] md:w-[25rem] lg:w-[30rem]'>
        <h1 className='text-big-font text-white font-display mb-5'>Register</h1>
        <form className='flex flex-col'>
            <input className='rounded px-3 h-8' type="text" placeholder='Username' value={registerData.username} onChange={(e) => { setRegisterData( {...registerData, username: e.target.value.replace(/\s/g, '')} ) }} />
            <input className='rounded px-3 h-8 mt-3' type="password" placeholder='Password' onChange={(e) => { setRegisterData({...registerData, password: e.target.value}) }} />
            <label className='cursor-pointer flex-col md:flex-row items-center flex gap-3 md:gap-6 ml-1 mt-7 text-white'>
                <input className='hidden' type="file" accept="image/*" onChange={(e) => { handleImageUpload(e) }} />
                <div className='bg-white h-16 md:h-10 w-16 md:w-10 rounded-full flex justify-center items-center shadow-xl hover:bg-second-text transition-all'>
                    <img src={uploadImg} alt="upload" />
                </div>
                <div className='mt-2'>
                    <h1 className='text-sm-font font-bold'>Upload a Profile Picture</h1>
                    <p className='text-xs-font font-bold text-second-text'>It's not required so you can upload it later too.</p>
                    <i className='text-xs-font text-second-text'>{registerData.pictureStatus}</i>
                </div>
            </label>
            <button className='mt-7 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={(e) => {registerUser( registerData.username, registerData.password, registerData.picture, e )}}>{registerData.btnText}</button>
        </form>
        <p className='text-white text-center mt-3'>{registerData.status}</p>
    </div>
  )
}

export default Register