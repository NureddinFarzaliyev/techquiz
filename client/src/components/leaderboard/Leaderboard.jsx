import React, { useEffect, useState } from 'react'
import Header from '../Header.jsx'
import { fetchLeaderboard } from '../../Utils.jsx'
import LbItem from './LbItem.jsx'
import LbItemPlaceholder from './LbItemPlaceholder.jsx'

function Leaderboard() {
    
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetchLeaderboard(3, setLeaderboard)
    }, [])

  return (
    <>
      <Header />
      <div className='mt-32 absolute text-white'>
        {leaderboard.length == 0 ? <LbItemPlaceholder /> : leaderboard.map((e, i) => <LbItem userData={e} id={i} />)}
      </div>
    </>
  )
}

export default Leaderboard
