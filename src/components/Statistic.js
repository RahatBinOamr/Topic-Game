import React, { useContext } from 'react';
import { QuizContext } from '../Layout/Main';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistic = () => {
    const data = useContext(QuizContext);
    console.log(data)
    
    return (
        <div className='m-20'>
        <ResponsiveContainer width="100%" height={200} >
          <AreaChart
            width={500}
            height={200}
            data={data}
            
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }}/>
            <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }}/>
            <Tooltip />
            <Area type="monotone"  dataKey="total" stroke="red" fill="red" />
          </AreaChart>
        
        </ResponsiveContainer>
      </div>
    );
};

export default Statistic;