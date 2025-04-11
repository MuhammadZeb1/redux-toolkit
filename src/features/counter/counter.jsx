import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // Import useDispatch

import { inc, dec } from './counterSlice'; // Ensure inc & dec are imported

function Counter() {
    const count = useSelector((state)=>state.counter.count)
  // Accessing count correctly
    const dispatch = useDispatch();  // Use useDispatch to dispatch actions

    return (
        <div className='h-screen bg-blue-400 w-screen flex flex-col justify-center gap-2.5 items-center'>
            <span className='px-7 bg-amber-400 rounded-2xl'>{count}</span>
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
            </div>
        </div>
    )
}

export default Counter;
