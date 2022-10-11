import React from 'react';
import { toast } from 'react-toastify';




const QizeFrom = ({quiz}) => {
    const {correctAnswer,id,options,question}=quiz;
console.log(quiz)

const handelCorrect= (id)=>{
// console.log(id);

if(id===correctAnswer){
    console.log('hello');
    return toast.success('right answer!', { autoClose: 500 })
}else{
    toast.warning('wrong answer!', { autoClose: 500 })
}
}
const eye=()=>{
    // console.log('eye');
   console.log(correctAnswer);
   toast.success(correctAnswer, { autoClose: 500 })
}

    return (
        <div >
            <div className='bg-cyan-100 text-base-300 m-10 rounded-lg' >  
            <svg onClick={eye} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                <h1 className='text-3xl font-semibold'> {question.slice(3,-4)} 
                </h1>
                 {
                 options.map(option=>  <p  className='text-left p-5 ml-5'> <input onClick={()=>handelCorrect(option)} type="checkbox"
                 name="check"  value='check' className='mr-8' /> {option}</p> )
                 } 
            </div>
        </div>
    );
};

export default QizeFrom;