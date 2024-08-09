import React from 'react'
import { placeholderFactory } from '../../Utils'

function LbPlaceholderItem() {
  const rectPlaceholder = placeholderFactory('rect')
  const circlePlaceholder = placeholderFactory('circle')

  return (
    <div className='border-b-2 border-second-text py-7 w-full flex flex-col items-center sm:items-start sm:flex-row'>
      {circlePlaceholder(70, 70)}
      <div className='sm:ml-6 flex flex-col items-center sm:items-start'>
        <h1 className='mt-3 sm:mt-0 flex items-center'>
          {rectPlaceholder(250, 30)}
        </h1>
        <p className='mt-4'>
          {rectPlaceholder(200, 20)}
        </p>
      </div>
    </div>
  )
}

export default LbPlaceholderItem
