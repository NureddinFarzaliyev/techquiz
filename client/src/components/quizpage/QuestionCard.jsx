import React, { useEffect } from 'react'
import AnswerButton from './AnswerButton'

function QuestionCard({question, onCorrect}) {
    const questionText = question.question
    const [a, b, c, d] = [question.answers.answer_a, question.answers.answer_b, question.answers.answer_c, question.answers.answer_d]
    const correct_answers = question.correct_answers

  return (
    <div className='border-solid border-black border-2'>
        {questionText}
        <ul>
            <AnswerButton text={a} isCorrect={correct_answers[`answer_a_correct`]} onCorrect={onCorrect}/>
            <AnswerButton text={b} isCorrect={correct_answers[`answer_b_correct`]} onCorrect={onCorrect}/>
            <AnswerButton text={c} isCorrect={correct_answers[`answer_c_correct`]} onCorrect={onCorrect}/>
            <AnswerButton text={d} isCorrect={correct_answers[`answer_d_correct`]} onCorrect={onCorrect}/>
        </ul>
    </div>
  )
}

export default QuestionCard