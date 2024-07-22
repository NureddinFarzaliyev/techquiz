import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuizContainer from './QuizContainer';

function QuizPage({}) {
    const API_KEY = import.meta.env.VITE_QUIZ_API_KEY
    const [data, setData] = useState(null);
    const [url, setUrl] = useState();
    const {name, difficulty} = useParams();


    // const declareURL = () => {
    //     if(name == "General"){
    //         setUrl(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&difficulty=${difficulty}&limit=10`)
    //     }else if(name == "Code"){
    //         setUrl(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${name}&difficulty=${difficulty}&limit=10`)
    //     }else{
    //         setUrl(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&tags=${name}&difficulty=${difficulty}&limit=10`)
    //     }
    // }

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


    // useEffect(() => {
    //     try {
    //         fetch(url).then(response => response.json()).then(data => setData(data))
    //         console.log('data fetched for', url)
    //     } catch (error) {
    //         throw new error
    //     }
    // }, [url])

    return (
        <>
            <div>{name}</div>
            <div>{difficulty}</div>


            <QuizContainer data={data}/>

        </>
    )
}

export default QuizPage