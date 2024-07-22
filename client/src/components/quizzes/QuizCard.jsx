import React from 'react'
import { Link } from 'react-router-dom'

function QuizCard( { quizName } ) {

  const difficultyButton = (quizName, quizDifficulty) => {
    return(
      <Link to={`/quiz/${quizName}/${quizDifficulty}`}>
        <div>{quizDifficulty}</div>
      </Link>
    )
  }
  
  return (
    <>
    <div className='border-solid border-2 border-black'>
      <h1 className='font-bold text-xl'>{quizName}</h1>
      <div>
        {difficultyButton(quizName, "Easy")}
        {difficultyButton(quizName, "Medium")}
        {difficultyButton(quizName, "Hard")}
      </div>      
    </div>
    </>
  )
}

export default QuizCard