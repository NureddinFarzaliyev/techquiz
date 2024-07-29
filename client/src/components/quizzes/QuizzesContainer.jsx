import React from 'react'
import GeneralQuizzes from './GeneralQuizzes'
import TopicQuizzes from './TopicQuizzes'

function QuizzesContainer() {
  return (
    <div className='pt-32 px-10 flex justify-center pb-32'>
      <div className='md:w-min'>
          <GeneralQuizzes/>
          <TopicQuizzes/>
      </div>
    </div>
  )
}

export default QuizzesContainer