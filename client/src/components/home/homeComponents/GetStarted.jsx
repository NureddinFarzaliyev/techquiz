import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import Login from './Login'
import Register from './Register'

function GetStarted() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState('invisible')

  return (
    <div className='md:h-dvh col-start-1 col-span-3 flex flex-col justify-around relative'>

      <h1 className='md:text-xbig-font text-big-font text-center md:text-left font-display font-bold text-white'>Get Started</h1>
      <p className='text-white text-sm-font md:text-big-font text-center md:text-left mt-8 md:mt-0 md:mw-[40rem]'>Login or create new account and start solving quizzes about your preferred technology topics.</p>
      
      <div className='mt-10 md:mt-16 flex justify-center md:justify-start flex-wrap gap-3'>
        <a href="#secondSection">
          <button onClick={() => {setIsRegisterOpen(true)}} className='bg-main-accent hover:bg-second-accent hover:scale-105 transition-all text-white font-display text-med-font py-1 w-44 rounded-md shadow-lg'>Register</button>
        </a>
        <Dialog open={isRegisterOpen} onClose={() => {setIsRegisterOpen(false)}} className="relative z-50">
          <DialogBackdrop className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="bg-second-bg p-5 rounded-lg">
              <Register />
            </DialogPanel>
          </div>
        </Dialog>

        <a href="#secondSection">
          <button onClick={() => {setIsLoginOpen(true)}}  className='bg-second-accent hover:bg-main-accent hover:scale-105 transition-all text-white font-display text-med-font py-1 w-44 rounded-md shadow-lg'>Login</button>
        </a>
        <Dialog open={isLoginOpen} onClose={() => {setIsLoginOpen(false)}} className="relative z-50">
          <DialogBackdrop className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="bg-second-bg p-5 rounded-lg">
              <Login />
            </DialogPanel>
          </div>
        </Dialog>
      </div>
      
      <p className='md:text-med-font text-xs-font text-center mt-3 md:mt-0 md:text-left text-second-text '> <a href="#thirdSection"> <u> Scroll Down </u> </a> to See More Details About Project</p>
    
    </div>
  )
}

export default GetStarted