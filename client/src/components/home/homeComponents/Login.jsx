import React from 'react'
import { useState } from 'react'

function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        btnText: 'Login',
        status: '',
    })

    const loginUser = (username, password, e) => {
        e.preventDefault()
        try{
            setLoginData({...loginData, btnText: 'Loading...'})
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
            setLoginData({...loginData, status: 'Error occured. Please try again.', btnText: 'Login'})
        }
    }

    const handleAfterLogin = (res) => {
        if(res == "unauthorized"){
            setLoginData({...loginData, btnText: "Login", status: "Password is Wrong"})
        }else if(res == "nouser"){
            setLoginData({...loginData, btnText: "Login", status: 'There is no account with this username'})
        }else{
            localStorage.setItem("userId", res)
            window.location.href = '/'
        }
    }


    return (
        <div className='flex flex-col sm:w-[15rem] md:w-[25rem] lg:w-[30rem]'>
            <h1 className='text-big-font text-white font-display mb-5'>Login</h1>

            <form className='flex flex-col'>
                <input className='rounded px-3 h-8' type="text" placeholder='Username' onChange={(e) => { setLoginData({...loginData, username: e.target.value}) }} />
                <input className='rounded px-3 h-8 mt-3' type="password" placeholder='Password' onChange={(e) => { setLoginData({...loginData, password: e.target.value}) }} />
                <button className='mt-7 rounded shadow-md hover:bg-second-accent transition-all bg-main-accent h-8 text-white' onClick={(e) => {loginUser(loginData.username, loginData.password, e)}}>{loginData.btnText}</button>
                <p className='text-white text-center mt-3'>{loginData.status}</p>
            </form>
        </div>
    )
}

export default Login