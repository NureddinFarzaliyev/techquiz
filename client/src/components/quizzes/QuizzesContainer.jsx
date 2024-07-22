import React from 'react'
import GeneralQuizzes from './GeneralQuizzes'
import TopicQuizzes from './TopicQuizzes'

function QuizzesContainer() {
  return (
    <>
    <h1>Choose a quiz</h1>
    <div>
        <GeneralQuizzes/>
        <TopicQuizzes/>
    </div>
    </>
  )
}

export default QuizzesContainer