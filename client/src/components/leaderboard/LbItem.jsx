import React from 'react'

function LbItem({userData, id}) { // LeaderBoard Item
  return (
    <div key={id}>
      {userData.username}
      {userData.points}
    </div>
  )
}

export default LbItem
