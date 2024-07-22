import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'

function QuizContainer({data}) {

    const [questionData, setQuestionData] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        setQuestionData(data)
    })

    const handleCorrectAnswer = () => {
      setCurrentQuestion((c) => c + 1)
    }

    const setQuestions = ( ) => {
        if(questionData){
            return <QuestionCard question={questionData[currentQuestion]} onCorrect={handleCorrectAnswer} />
        }
    }

  return (
    <div>{setQuestions()}</div>
  )
}

export default QuizContainer