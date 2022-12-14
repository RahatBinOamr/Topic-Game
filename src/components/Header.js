import React from 'react';
import { Link } from 'react-router-dom';
import quiz from '../img/quiz.jpeg'

const Header = () => {
    return (
        <div className="navbar space-x-52 bg-gray-400 shadow-lg text-white text-xl w-full">
        <div className="navbar-start">
        <div className="dropdown w-full text-left">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow  bg-gray-400  rounded-box w-full">
            <li> <Link to= '/home' > Home </Link> </li>
          
            <li> <Link to='/Statistic'> Statistic </Link> </li>
            <li> <Link to='/blog'> Blog </Link> </li>
      </ul>
    </div>
         
    <div className='flex px-5'>
        <img src= {quiz} alt="" className='w-12'/>
        <a className="btn btn-ghost normal-case  text-3xl text-red-500 font-bold"> Topic Game </a>
    </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           
            <li> <Link to= '/home' > Home </Link> </li>
           
              <li> <Link to='/Statistic'> Statistic </Link> </li>
              <li> <Link to='/blog'> Blog </Link> </li>
            
          </ul>
        </div>
        
      </div>
    );
};

export default Header;