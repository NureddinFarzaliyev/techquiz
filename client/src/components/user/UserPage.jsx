import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import { fetchUserData } from './UserUtils';
import { Level } from './UserUtils';
import NonUserHeader from './NonUserHeader';
import './user.css'
import UserPageProfile from './UserPageProfile';
import { loadComponent } from '../../Utils';
import UserPageProfilePlaceholder from './UserPageProfilePlaceholder';

function UserPage() {

    const params = useParams();

    const [userData, setUserData] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [userLevel, setUserLevel] = useState('')

    useEffect(() => {
        fetchUserData(setUserData, setImageUrl, null, params.username)
    }, [])

    useEffect(() => {
        setUserLevel(Level(userData.points))
    }, [userData])

    return (
        <div>
        { localStorage.getItem('userId') ? <Header/> : <NonUserHeader />}  
        {loadComponent(userLevel.label, <UserPageProfilePlaceholder />,  <UserPageProfile userData={userData} userLevel={userLevel} imageUrl={imageUrl} />  )}
        </div>
    )

}

export default UserPage