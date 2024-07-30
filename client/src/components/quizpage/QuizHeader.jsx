import React from 'react'

function QuizHeader({name, difficulty}) {

    

    return (
        <div className='bg-second-bg w-56 flex flex-col justify-center items-center py-2 drop-shadow-2xl clip-reversed-trapezium'>
            <h1 className='text-white text-med-font'>{name}</h1>
            <i className='text-second-text text-sm-font mt-[-5px]'>{difficulty}</i>
        </div>
    )
}

export default QuizHeader