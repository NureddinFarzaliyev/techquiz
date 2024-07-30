import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuizContainer from './QuizContainer';
import QuizHeader from './QuizHeader';
import { Navigate, Link } from 'react-router-dom';
import backImg from '../../assets/back.svg'

function QuizPage({}) {
    const API_KEY = import.meta.env.VITE_QUIZ_API_KEY
    const [data, setData] = useState(null);
    const {name, difficulty} = useParams();

    const ifLoggedIn = () => {
        if(localStorage.getItem("userId") != null){
            return true
        }else{
            return false
        }
    }

    useEffect(() => {

        const declareURL = (name) => {
            if(name == "General"){
                return `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&difficulty=${difficulty}&limit=10`
            }else if(name == "Code"){
                return `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${name}&difficulty=${difficulty}&limit=10`
            }else{
                return `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&tags=${name}&difficulty=${difficulty}&limit=10`  
            }
        }
    
        const getData = async () => {
            try {
                const URL = declareURL(name);
                const response = await fetch(URL)

                if(!response.ok){
                    throw new Error('response was not ok')
                }

                const result = await response.json();

                setData(result)

            } catch (error) {
                console.log(error)
            }
        }

        getData();

    }, [])

    if(ifLoggedIn()){
        return (
            <div className='flex flex-col items-center h-dvh px-10 lg:px-32'>
                <QuizHeader name={name} difficulty={difficulty} />
        
                <QuizContainer data={data} difficulty={difficulty}/>    

                <Link to="/">
                    <div className='absolute translate-x-[-50%] bottom-10 flex gap-3 px-4 bg-second-bg opacity-50 hover:opacity-100 transition-all py-2 rounded-md text-white'>
                        <img src={backImg} />
                        <p>Back</p>
                    </div>
                </Link>
    
            </div>
        )
    }else{
        return(
            <Navigate to="/" />
        )
    }
}

export default QuizPage