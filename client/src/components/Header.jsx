import React, { useEffect, useState } from 'react'
import { DialogBackdrop, Dialog, DialogPanel } from '@headlessui/react'
import ExpandedProfile from './headerComponents/ExpandedProfile'
import BasicProfile from './headerComponents/BasicProfile'
import MobileProfile from './headerComponents/MobileProfile'
import editIcon from '../assets/edit.svg'


function Header() {

    const [userData, setUserData] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [isEditOpen, setIsEditOpen] = useState(false)

    const fetchUserData = () => {
        const userId = localStorage.getItem('userId')
        if(userId){
            try{
                fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`)
                .then(response => response.json())
                .then(data => handleUserData(data))
            }catch(error){
                console.log(error)
            }
        }
    }

    const handleUserData = (data) => {

        setUserData(data)

        if(data.profilePicture != ''){
            const img = `data:image/png;base64,${data.profilePicture}`;
            setImageUrl(img)
        }else{
            setImageUrl('./src/assets/avatar.png')
        }

    }


    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <div className='bg-second-bg py-4 px-4 sm:px-10 flex justify-between items-center fixed w-full z-50'>

            <h1 className='text-white font-bold text-big-font text-3xl font-display drop-shadow-2xl'>TechQuiz</h1>

            {/* ! BASIC PROFILE */}

            <div className='hidden sm:block'>
                <BasicProfile imageUrl={imageUrl} userData={userData} setIsEditOpen={setIsEditOpen} />
            </div>

            <div className='block sm:hidden'>
                <MobileProfile imageUrl={imageUrl} userData={userData} setIsEditOpen={setIsEditOpen} />
            </div>

            {/* EXPANDED PROFILE */}

            <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/90" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <DialogPanel className="bg-second-bg shadow-2xl rounded-lg w-96">
                        <ExpandedProfile />
                    </DialogPanel>
                </div>
            </Dialog>


        </div>
    )
}

export default Header