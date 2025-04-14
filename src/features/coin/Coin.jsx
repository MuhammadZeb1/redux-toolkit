import React from 'react'
import { useSelector } from 'react-redux'

function Coin() {
    const count = useSelector((state)=>state.counter.count)
    return (
        <>
        <h1 className='bg-amber-900'>coin{count}</h1>
        </>
    )
}

export default Coin
