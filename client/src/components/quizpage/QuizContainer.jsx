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
      button.classList.add('true-anim')
      setBtnDisabled(true)
      setTimeout(() => {
        setBtnDisabled(false)
        button.classList.remove('true-anim')
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

          addPoints(earnedPoints + extraPoints(earnedPoints))

          return(
            <div className='mt-16'>
              <p className='text-white text-big-font font-bold text-center'> 
                You've earned {earnedPoints + extraPoints(earnedPoints)} points.
              </p>          
              <p className='text-second-text text-sm-font text-center mt-5'>Go back to solve more quizzes <br/> and earn more points!</p>
            </div>
          )

        }else{

          return(
            <div className='text-second-text text-center text-med-font absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Loading...</div>
          )
          
        }
    }

  return (
    <>
      <p className='text-second-text text-sm-font my-5'>{earnedPoints} pts</p>
      <div className='mt-14 w-full'>
        {setQuestions()}
      </div>
    </>
  )
}

export default QuizContainer