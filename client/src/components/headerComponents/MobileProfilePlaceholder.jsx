import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'

function MobileProfilePlaceholder() {
  return (
    <div>
        <PlaceholderLoading shape='circle' width={64} height={64} colorStart='rgba(255, 255, 255, 0.2)' colorEnd='rgba(255, 255, 255, 0.5)' />
    </div>
  )
}

export default MobileProfilePlaceholder
