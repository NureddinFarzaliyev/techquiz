import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'

function UserPageProfilePlaceholder() {

    const placeholderFactory = (shape, width, height) => {
        return(
            <div className='rounded-md overflow-hidden'>
                <PlaceholderLoading  shape={shape} width={width} height={height} colorStart='rgba(255, 255, 255, 0.2)' colorEnd='rgba(255, 255, 255, 0.5)' />
            </div>
        )
    }

  return (
    <>
    <section className='flex absolute left-[50%] top-[55%] flex-col items-center gap-14 translate-x-[-50%] translate-y-[-50%]'>
        {placeholderFactory("circle", 250, 250)}
        <div className='flex flex-col items-center gap-2'>
            {placeholderFactory("rect", 300, 45)}
            {placeholderFactory("rect", 200, 35)}
        </div>
        {placeholderFactory("rect", 400, 25)}
    </section> 

    </>
    
  )
}

export default UserPageProfilePlaceholder
