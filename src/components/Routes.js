import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home";
import ErrorPage from "./ErrorPage"
import QuizesData from "./QuizeData";
export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: async()=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz`)
    },
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/home/:id',
            loader: ({params})=>{
                return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            element:<QuizesData></QuizesData>
        }
    ]
}
]);