import React from 'react';

const QizeFrom = ({quiz}) => {
    const {correctAnswer,id,options,question}=quiz
// console.log(quiz)

const handelCorrect= (id)=>{
console.log(id);
}

    return (
        <div >
            <div className='bg-cyan-100 text-base-300 m-10 rounded-lg'> 
                <h1 className='text-3xl font-semibold'> {question.slice(3,-4)} </h1>
                 {options.map(option=>  <p  className='text-left p-5 ml-5'> <input onClick={handelCorrect} type="radio" value={option} className='mr-8' /> {option}</p> )} 
            </div>
        </div>
    );
};

export default QizeFrom;