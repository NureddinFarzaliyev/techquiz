import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './quiz.css'

function QuizCard( { quizName } ) {

  const importImage = async () => {
    try{
      const image = await import(`../../assets/${quizName}.svg`)
      const imageUrl = await image.default
      setImgUrl(imageUrl)
    }catch(error){
      console.log(error)
    }
  }
  
  const [imgUrl, setImgUrl] = useState('') 

  useEffect(() => {
    importImage();
  }, [])

  const difficultyButton = (quizName, quizDifficulty) => {
    return(
      <Link to={`/quiz/${quizName}/${quizDifficulty}`}>
        <button className={`${quizDifficulty} font-semibold rounded-md w-32 shadow-lg text-xs-font transition-all`}>{quizDifficulty}</button>
      </Link>
    )
  }
  
  return (
    <>
    <div className='bg-white flex items-end flex-col transition-all overflow-hidden rounded-lg shadow-2xl h-40 lg:h-48 w-80 lg:w-96 flex-shrink-0 p-2 px-5 relative'>
      <img src={imgUrl} alt={quizName} className='h-44 bottom-4 lg:bottom-8 left-[-35px] drop-shadow-2xl absolute'/>
      <h1 className='font-bold text-med-font lg:text-big-font'>{quizName}</h1>
      <div className='flex-col flex items-end mt-2'>
        {difficultyButton(quizName, "Easy")}
        {difficultyButton(quizName, "Medium")}
        {difficultyButton(quizName, "Hard")}
      </div>      
    </div>
    </>
  )
}

export default QuizCard