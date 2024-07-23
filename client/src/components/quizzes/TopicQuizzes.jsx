import React from 'react'
import QuizCard from './QuizCard'

function TopicQuizzes() {
  return (
    <>
    <h1>Topic Quizzes</h1>
    <QuizCard quizName="Linux"/>
    <QuizCard quizName="Bash"/>
    <QuizCard quizName="Kubernetes"/>
    <QuizCard quizName="HTML"/>
    <QuizCard quizName="Python"/>
    <QuizCard quizName="PHP"/>
    <QuizCard quizName="Docker"/>
    <QuizCard quizName="MySQL"/>
    </>
  )
}

export default TopicQuizzes