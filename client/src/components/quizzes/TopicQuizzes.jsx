import React from 'react'
import QuizCard from './QuizCard'

function TopicQuizzes() {
  return (
    <>
    <h1>Topic Quizzes</h1>
    <QuizCard quizName="Linux"/>
    <QuizCard quizName="Docker"/>
    <QuizCard quizName="Python"/>
    <QuizCard quizName="HTML"/>
    <QuizCard quizName="PHP"/>
    </>
  )
}

export default TopicQuizzes