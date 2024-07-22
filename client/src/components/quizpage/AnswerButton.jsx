import React from 'react'

function AnswerButton( { text, isCorrect, onCorrect } ) {

    const handleButtonClick = () => {
        if(isCorrect === "true"){
            onCorrect();
        }else{
            console.log('Wrong Answer')
        }
    }

  return (
    <button className='border-solid border-2 border-red-400' onClick={handleButtonClick}>
        {text}
    </button>
  )
}

export default AnswerButton