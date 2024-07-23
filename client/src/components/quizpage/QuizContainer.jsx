import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'

function QuizContainer({data, difficulty}) {
    const [questionData, setQuestionData] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [earnedPoints, setEarnedPoints] = useState(0)


    useEffect(() => {
        setQuestionData(data)
    })

    const pts = (isAnswerCorrect) => {
      let res
      switch (difficulty) {
        case "Easy":
          res = 5
          break;
        case "Medium":
          res = 10
          break;
        case "Hard":
          res = 20
          break;
        }
      setEarnedPoints(prevPoints => {
        if(isAnswerCorrect){
          return prevPoints + res
        }else if(prevPoints - res <= 0){
          return 0
        }return prevPoints - res
      } )
    }

    // Make other buttons unuseable when animations are going

    const handleCorrectAnswer = ( button ) => {
      // add earned points  
      pts(true);

      // toggle button styling
      button.classList.add('bg-green-800')
      setBtnDisabled(true)
      setTimeout(() => {
        setBtnDisabled(false)
        button.classList.remove('bg-green-800')
        setCurrentQuestion((c) => c + 1)
      }, 500);
    }

    const handleFalseAnswer = ( button ) => {
      // add earned points  
      pts(false);

      // toggle button styling
      button.classList.add('false-anim')
      setBtnDisabled(true)
      setTimeout(() => {
        button.classList.remove('false-anim')
        setBtnDisabled(false)
      }, 500);
    }

    const setQuestions = ( ) => {
        if(questionData && questionData[currentQuestion]){
            return <QuestionCard btnState={btnDisabled} question={questionData[currentQuestion]} onFalse={handleFalseAnswer} onCorrect={handleCorrectAnswer} />
        }else if(currentQuestion == 10){
          console.log('questions ended')

          // ! ADD EARNED POINTS TO USER DATABASE

        }else{
          console.log('not loaded yet')
        }
    }

  return (
    <div>
      <div>{setQuestions()}</div>
      <div>
        <span>Earned Points: {earnedPoints}</span>
      </div>
    </div>
  )
}

export default QuizContainer