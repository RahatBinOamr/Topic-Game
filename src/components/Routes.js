import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
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
    ]
}
]);