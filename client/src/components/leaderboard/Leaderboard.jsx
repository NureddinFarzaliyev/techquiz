import React, { useEffect, useState } from 'react'
import Header from '../Header.jsx'
import { fetchLeaderboard } from '../../Utils.jsx'
import LbItem from './LbItem.jsx'
import LbItemPlaceholder from './LbItemPlaceholder.jsx'
import '../user/user.css'

function Leaderboard() {
    
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetchLeaderboard(10, setLeaderboard)
    }, [])

  return (
    <section className='flex flex-col items-center'>
      <Header />
      <div className='top-[20%] h-[70vh] w-[90vw] sm:w-[70vw] overflow-y-scroll absolute userCardGradient px-5 sm:px-10 rounded-lg shadow-2xl text-white'>
        {leaderboard.length == 0 ? <LbItemPlaceholder /> : leaderboard.map((e, i) => <LbItem userData={e} id={i} />)}
      </div>
    </section>
  )
}

export default Leaderboard
