import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizesData = () => {
    const quuizesProperty  = useLoaderData() 
    const quizesData = quuizesProperty.data; 
    console.log(quizesData)
    return (
        <div>
            This is QUiz data {quizesData.name}
        </div>
    );
};

export default QuizesData;