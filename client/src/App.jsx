import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import QuizPage from './components/quizpage/QuizPage';
import UserPage from './components/user/UserPage';
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/quiz/:name/:difficulty" element={<QuizPage/>} />
        <Route path="/:username" element={<UserPage />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
