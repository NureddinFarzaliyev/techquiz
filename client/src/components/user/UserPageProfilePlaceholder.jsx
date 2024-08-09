import React from 'react'
import { placeholderFactory } from '../../Utils'

function UserPageProfilePlaceholder() { 

    const rectPlaceholder = placeholderFactory('rect')
    const circlePlaceholder = placeholderFactory('circle')

    return(
    <>
    <section className='hidden sm:flex h-dvh w-full items-center justify-center'>
        <div className='userCardGradient p-10 mt-14 gap-10 md:px-10 md:py-16 md:gap-16 rounded-xl shadow-xl flex-col md:flex-row items-center flex '>
            {circlePlaceholder(250, 250)} 
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    {rectPlaceholder(300, 45)}
                    {rectPlaceholder(200, 35)}
                </div>
                {rectPlaceholder(400, 25)}
            </div>
        </div>
    </section>
    <section className='flex sm:hidden h-dvh w-full items-center justify-center'>
        <div className='h-96 w-80 userCardGradient p-10 mt-14 gap-10 md:px-10 md:py-16 md:gap-16 rounded-xl shadow-xl flex-col md:flex-row items-center justify-center flex '>
            <h1 className='text-second-text'>Loading...</h1>
        </div>
    </section>
    </>
    )
}

export default UserPageProfilePlaceholder
