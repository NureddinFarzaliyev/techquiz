import React, { useState } from 'react'
import { isImage } from '../../Utils';

function Login() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState()
    const [registerStatus, setRegisterStatus] = useState()
    
    const registerUser = (username, password, profilePicture, e) => {

        if(username && password){
            const formData = new FormData()
    
            formData.append("username", username)
            formData.append("password", password)
            formData.append("points", 0)
            formData.append("profilePicture", profilePicture)
    
            try{
                fetch(`${import.meta.env.VITE_BASE_URL}/user/new`, {
                    method: "POST",
                    body: formData
                }).then(response => response.json()).then(data => {
                    if(typeof data == 'object'){
                        setRegisterStatus('Registered Successfully. Please Login.')
                    }else{
                        setRegisterStatus(data)
                    }
                })
            }catch(error) {
                console.log(error)
                setRegisterStatus('Error occured. Please try again.')
            }
        }else{
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
            console.log('image uploaded')
            setProfilePicture(e.target.files[0])
        }
    }

    const loginUser = (username, password) => {
        try{
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
        }
    }

    const handleAfterLogin = (res) => {
        if(res == "unauthorized"){
            console.log("WRONG PASSWORD")
            setLoginStatus('Password is wrong')
        }else if(res == "nouser"){
            console.log("WRONG USERNAME")
            setLoginStatus('There is no account with this username')
        }else{
            console.log(`Successful login: ${res}`)
            localStorage.setItem("userId", res)
            console.log(`Local storage item: ${localStorage.getItem("userId")}`)
            setLoginStatus('')
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
                <button onClick={() => {registerUser( registerUsername, registerPassword, profilePicture )}}>Register</button>
                <p>{registerStatus}</p>
            </div>
            <div>
                <h1>login</h1>
                <input type="text" placeholder='username' onChange={(e) => { setLoginUsername(e.target.value) }} />
                <input type="text" placeholder='password' onChange={(e) => { setLoginPassword(e.target.value) }} />
                <button onClick={() => {loginUser(loginUsername, loginPassword)}}>Login</button>
                <p>{loginStatus}</p>
            </div>
        </div>
    )
}

export default Login