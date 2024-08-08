import React from 'react'
import GeneralQuizzes from './GeneralQuizzes'
import TopicQuizzes from './TopicQuizzes'
import { Link } from 'react-router-dom'
import leaderboardIcon from '../../assets/medal.svg'

function QuizzesContainer() {
  return (
    <div className='pt-32 px-10 flex justify-center pb-32'>
      <div className='md:w-min'>
          <GeneralQuizzes/>
          
          <div className='text-white bg-main-accent hover:bg-second-accent mt-7 transition-all rounded-lg shadow-xl font-display font-semibold text-med-font'>
            <Link to={'/leaderboard'}>
              <button className='flex p-3 items-center justify-center w-full gap-4'>
                <img src={leaderboardIcon} alt="icon" />
                <h1>Leaderboard</h1>
              </button>
            </Link>
          </div>

          <TopicQuizzes/>
      </div>
    </div>
  )
}

export default QuizzesContainer