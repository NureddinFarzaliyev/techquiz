import React from 'react'
import { useState } from 'react'

function Login() {
    const [loginBtnText, setLoginBtnText] = useState('Login')
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')


    const loginUser = (username, password) => {
        try{
            setLoginBtnText('Loading...')
            fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
                method: "POST",
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => response.json()).then(data => handleAfterLogin(data))

        }catch(error){
            console.log(error)
            setLoginStatus('Error occured. Please try again.')
            setLoginBtnText('Login')
        }
    }

    const handleAfterLogin = (res) => {
        if(res == "unauthorized"){
            setLoginBtnText("Login")
            setLoginStatus('Password is wrong')
        }else if(res == "nouser"){
            setLoginBtnText("Login")
            setLoginStatus('There is no account with this username')
        }else{
            localStorage.setItem("userId", res)
            console.log(`Local storage item: ${localStorage.getItem("userId")}`)
            location.reload()
        }
    }


    return (
        <div className='flex flex-col sm:w-[15rem] md:w-[25rem] lg:w-[30rem]'>
            <h1 className='text-big-font text-white font-display mb-5'>Login</h1>
            <input className='rounded px-3 h-8' type="text" placeholder='Username' onChange={(e) => { setLoginUsername(e.target.value) }} />
            <input className='rounded px-3 h-8 mt-3' type="password" placeholder='Password' onChange={(e) => { setLoginPassword(e.target.value) }} />
            <button className='mt-7 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={() => {loginUser(loginUsername, loginPassword)}}>{loginBtnText}</button>
            <p className='text-white text-center mt-3'>{loginStatus}</p>
        </div>
    )
}

export default Login