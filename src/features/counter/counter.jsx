import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' // Import useDispatch

import { inc, dec, incByNum } from './counterSlice'; // Ensure inc & dec are imported

function Counter() {
    const [num,setnum]=useState()
    const count = useSelector((state)=>state.counter.count)
    const Theme = useSelector((state)=>state.theme.color)
  // Accessing count correctly
    const dispatch = useDispatch();  // Use useDispatch to dispatch actions

    return (
        <div className=' bg-blue-400 w-screen flex flex-col justify-center gap-2.5 items-center'>
            <span style={{color:Theme}}>{count}</span>
            <div className='flex gap-2'>
                <button 
                    onClick={() => dispatch(inc())} // Dispatching increment action
                    className='px-6 bg-amber-700 rounded-2xl'
                >
                    incr
                </button>
                <button 
                    onClick={() => dispatch(dec())} // Dispatching decrement action
                    className='px-6 bg-amber-700 rounded-2xl'
                >
                    dec
                </button>
                <input type="text" onChange={(e)=>setnum(e.target.value)} />
                <button 
                    onClick={() => dispatch(incByNum(Number(num)))} // Dispatching decrement action
                    className='px-6 bg-amber-700 rounded-2xl'
                >
                    dec
                </button>
            </div>
        </div>
    )
}

export default Counter;
