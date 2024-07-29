import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function TopicQuizzes() {


  const quizNames = ["Linux", "Bash", "Kubernetes", "HTML", "Python", "PHP", "Docker", "MySQL"]

  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [window.innerWidth])

  return (
    <div>
      <h1 className='text-white font-bold text-med-font mt-7'>Topic Quizzes</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-7'>
        <QuizCard quizName="Linux"/>
        <QuizCard quizName="Bash"/>
        <QuizCard quizName="Kubernetes"/>
        <QuizCard quizName="HTML"/>
        <QuizCard quizName="Python"/>
        <QuizCard quizName="PHP"/>
        <QuizCard quizName="Docker"/>
        <QuizCard quizName="MySQL"/>
      </div>
    </div>
  )
}

export default TopicQuizzes