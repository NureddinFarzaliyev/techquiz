import React from 'react'
import './quizpage.css'

function AnswerButton( { text, isCorrect, onCorrect, onFalse, btnState } ) {

    const handleButtonClick = (e) => {
        if(isCorrect === "true"){
            onCorrect( e.target );
        }else{
            onFalse( e.target );
        }
    }

  return (
    <button  disabled={btnState} className='border-solid border-2 border-red-400' onClick={(e) => {handleButtonClick(e)}}>
        {text}
    </button>
  )
}

export default AnswerButton