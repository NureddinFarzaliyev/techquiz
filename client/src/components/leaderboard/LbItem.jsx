import React, { useEffect, useState } from 'react'
import { handleImage } from '../user/UserUtils'
import { Level } from '../user/UserUtils'
import '../user/user.css'
import medalIcon from '../../assets/medal.svg'
import { Link } from 'react-router-dom'


function LbItem({userData, id}) { // LeaderBoard Item
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(handleImage(userData))
  }, [userData])
  
  const {points, username} = userData


  return (
    <Link to={`/${username}`}>
    <div key={id} className='border-b-2 border-second-text py-7 w-full flex flex-col items-center sm:items-start sm:flex-row'>
      <img src={imageUrl} alt={username} className={`${Level(points).label}Border ${Level(points).label}SmallShadow border-4 h-20 w-20 rounded-full overflow-hidden`} />
      <div className='ml-6 flex flex-col text-center sm:text-left'>
        <h1 className='font-bold text-med-font mt-3 sm:mt-0 flex items-center'>
          <span>{id == 0 && <img src={medalIcon} /> }</span>
          {username}
        </h1>
        <p className='text-second-text text-sm-font'>
          {`${Level(points).label} (${points} pts)`}
        </p>
      </div>
    </div>
    </Link>
  )
}

export default LbItem
