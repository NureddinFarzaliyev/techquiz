import React, { useState } from 'react'
import { isImage } from '../../Utils';

function Login() {
    const [loginBtnText, setLoginBtnText] = useState('Login')
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    const [registerBtnText, setRegisterBtnText] = useState('Register')
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState()
    const [registerStatus, setRegisterStatus] = useState('')
    
    const registerUser = (username, password, profilePicture) => {

        if(username && password){
            const formData = new FormData()
    
            formData.append("username", username)
            formData.append("password", password)
            formData.append("points", 0)
            formData.append("profilePicture", profilePicture)
    
            try{
                setRegisterBtnText('Loading...')
                fetch(`${import.meta.env.VITE_BASE_URL}/user/new`, {
                    method: "POST",
                    body: formData
                }).then(response => response.json()).then(data => {
                    setRegisterBtnText('Register')
                    if(typeof data == 'object'){
                        setRegisterStatus('Registered Successfully. Please Login.')
                    }else{
                        setRegisterStatus(data)
                    }
                })
            }catch(error) {
                setRegisterBtnText("Register")
                console.log(error)
                setRegisterStatus('Error occured. Please try again.')
            }
        }else{
            setRegisterBtnText('Register')
            setRegisterStatus('Please fill all the blanks')
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
            setProfilePicture(e.target.files[0])
        }
    }

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
            location.reload()
        }
    }

    return (
        <div>
            <div>
                <h1>register</h1>
                <input type="text" placeholder='username' onChange={(e) => { setRegisterUsername(e.target.value) }} />
                <input type="text" placeholder='password' onChange={(e) => { setRegisterPassword(e.target.value) }} />
                <input type="file" accept="image/*" onChange={(e) => { handleImageUpload(e) }} />
                <button onClick={() => {registerUser( registerUsername, registerPassword, profilePicture )}}>{registerBtnText}</button>
                <p>{registerStatus}</p>
            </div>
            <div>
                <h1>login</h1>
                <input type="text" placeholder='username' onChange={(e) => { setLoginUsername(e.target.value) }} />
                <input type="text" placeholder='password' onChange={(e) => { setLoginPassword(e.target.value) }} />
                <button onClick={() => {loginUser(loginUsername, loginPassword)}}>{loginBtnText}</button>
                <p>{loginStatus}</p>
            </div>
        </div>
    )
}

export default Login