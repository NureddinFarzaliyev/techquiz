import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'

function QuizContainer({data, difficulty}) {
    const [questionData, setQuestionData] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [earnedPoints, setEarnedPoints] = useState(0)
    const userId = localStorage.getItem('userId')


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

    const extraPoints = (earnedPoints) => {
      if(difficulty === "Easy" && earnedPoints == 50){
        return 20
      }else if(difficulty === "Medium" && earnedPoints == 100){
        return 50
      }else if(difficulty === "Hard" && earnedPoints == 200){
        return 100
      }return 0
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

    const addPoints = (pts) => {
      fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
          "points": pts
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json()).then(data => console.log(data))
    }

    const setQuestions = ( ) => {
        if(questionData && questionData[currentQuestion]){

          return <QuestionCard btnState={btnDisabled} question={questionData[currentQuestion]} onFalse={handleFalseAnswer} onCorrect={handleCorrectAnswer} />

        }else if(currentQuestion == 10){ // to end loop when the questions ended

          const totalPoints = earnedPoints + extraPoints(earnedPoints)

          addPoints(totalPoints)

          return(
            <p className='bg-red-800'> 
              You've earned {totalPoints} points.
            </p>          
          )

        }else{

          return(
            <div>Loading...</div>
          )
          
        }
    }

  return (
    <div>
      <div>{setQuestions()}</div>
      <p>{earnedPoints}</p>
    </div>
  )
}

export default QuizContainer