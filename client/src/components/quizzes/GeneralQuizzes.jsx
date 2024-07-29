import React from 'react'
import QuizCard from './QuizCard'

function GeneralQuizzes() {
  return (
    <div>
    <h1 className='text-white font-bold text-med-font'>General Quizzes</h1>
    <div className='grid md:flex gap-7 mt-7'>
      <QuizCard quizName="General"/>
      <QuizCard quizName="Code" />
    </div>
    </div>
  )
}

export default GeneralQuizzes