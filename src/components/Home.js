import React, { useContext } from 'react';
import { QuizContext } from '../Layout/Main';
import Quizes from './Quizs';

const Home = () => {
    const quizes = useContext(QuizContext)
    return (
        <div className='p-10'>
           <div>
           <h1 className='text-3xl text-center font-semibold mt-10 text-cyan-300'>
            Online Quiz
            </h1>
            <p className='text-xl text-cyan-100 mt-5 '>
                Better knowledge retention will help the students be thorough with their concepts. It will lead to better performance of the students in the future. This will also help students improve their memory. Online quizzes are a great way to help students learn what they learned after studying a particular topic</p>
           </div>
           <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 md:grid-cols-2 lg:row-gap-8 text-white'>
         {
            quizes.map(quiz=><Quizes
            key={quiz.id}
            quiz={quiz}
            ></Quizes>)
         }
        </div>
      </div>
        </div>
    );
};

export default Home;