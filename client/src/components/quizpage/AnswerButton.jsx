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

    if(text != null){
        return (
          <button  disabled={btnState} className='text-left mt-3 p-3 rounded-md bg-second-bg hover:bg-second-accent transition-all' onClick={(e) => {handleButtonClick(e)}}>
              {text}
          </button>
        )
    }
}

export default AnswerButton