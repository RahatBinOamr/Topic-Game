import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';


export const QuizContext = createContext([])
const Main = () => {
    const quizesData = useLoaderData()
    const quizes=quizesData.data
    // console.log(quizes)
    return (
        <QuizContext.Provider value={quizes}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Main;