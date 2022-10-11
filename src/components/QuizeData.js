import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QizeFrom from './From/QizeFrom';

const QuizesData = () => {
    const quuizesProperty  = useLoaderData() 
    const quizesData = quuizesProperty.data; 
    // console.log(quizesData)
   const data = quizesData.questions
//    console.log(data);

    return (
        <div>
            {
                data.map(quiz=> <QizeFrom
                    key={quiz.id}
                    quiz={quiz}
                ></QizeFrom>
               
                
              )
            }
        </div>
    );
};

export default QuizesData;