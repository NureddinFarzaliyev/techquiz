import React, { useEffect } from 'react'
import AnswerButton from './AnswerButton'

function QuestionCard({question, onCorrect, onFalse, btnState}) {
    const questionText = question.question
    const [a, b, c, d] = [question.answers.answer_a, question.answers.answer_b, question.answers.answer_c, question.answers.answer_d]
    const correct_answers = question.correct_answers

  return (
    <div className='text-white'>
      <p className='text-med-font font-bold'>{questionText}</p>
        <ul className='mt-5 flex flex-col'>
            <AnswerButton btnState={btnState} className="answerBtn" text={a} isCorrect={correct_answers[`answer_a_correct`]} onFalse={onFalse} onCorrect={onCorrect}/>
            <AnswerButton btnState={btnState} className="answerBtn" text={b} isCorrect={correct_answers[`answer_b_correct`]} onFalse={onFalse} onCorrect={onCorrect}/>
            <AnswerButton btnState={btnState} className="answerBtn" text={c} isCorrect={correct_answers[`answer_c_correct`]} onFalse={onFalse} onCorrect={onCorrect}/>
            <AnswerButton btnState={btnState} className="answerBtn" text={d} isCorrect={correct_answers[`answer_d_correct`]} onFalse={onFalse} onCorrect={onCorrect}/>
        </ul>
    </div>
  )
}

export default QuestionCard