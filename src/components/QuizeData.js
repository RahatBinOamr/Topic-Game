import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QizeFrom from './From/QizeFrom';

const QuizesData = () => {
    const quuizesProperty  = useLoaderData() 
    // console.log(quuizesProperty)
    const quizesData = quuizesProperty.data; 
    // console.log(quizesData.name)
    const name = quizesData.name;
   const data = quizesData.questions
//    console.log(data);

    return (
        <div>  <h1 className='text-3xl font-bold text-cyan-300 mt-5'> {name} </h1> 
            {
                data.map(quiz=> <QizeFrom
                    key={quiz.id}
                    quiz={quiz}
                    name={name}
                ></QizeFrom>
               
                
              )
            }
        </div>
    );
};

export default QuizesData;