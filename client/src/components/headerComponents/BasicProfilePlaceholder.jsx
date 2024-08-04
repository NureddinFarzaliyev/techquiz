import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'

function BasicProfilePlaceholder() {
  return (
    <div className='flex gap-3'>
        <div className='rounded-md overflow-hidden'>
            <PlaceholderLoading shape='rect' width={150} height={64} colorStart='rgba(255, 255, 255, 0.2)' colorEnd='rgba(255, 255, 255, 0.5)' />
        </div>
        <PlaceholderLoading shape='circle' width={64} height={64} colorStart='rgba(255, 255, 255, 0.2)' colorEnd='rgba(255, 255, 255, 0.5)' />
    </div>
  )
}

export default BasicProfilePlaceholder
