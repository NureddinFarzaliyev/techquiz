import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import QuizPage from './components/quizpage/QuizPage';
// import QuizzesContainer from './components/quizzes/QuizzesContainer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/quiz/:name/:difficulty" element={<QuizPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
