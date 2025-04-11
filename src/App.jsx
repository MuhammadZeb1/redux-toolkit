import { useState } from 'react'
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner'
function App() {
  const [count, setCount] = useState(0)
      const inc = ()=>{
        setCount(count + 1)
      }
      const dec = ()=>{
        setCount(count - 1)
      }
  return (
    <>
      <div className='h-screen bg-blue-400 w-screen flex  flex-col justify-center gap-2.5  items-center '>
        <span className='px-7 bg-amber-400 rounded-2xl'>{count}</span>
        <div className='flex gap-2'>
        <button onClick={inc}
        className='px-6 bg-amber-700 rounded-2xl'
        >incr </button>  
        <button onClick={dec} 
        className='px-6 bg-amber-700 rounded-2xl'
        >dec</button>  
        </div>
      </div>
    </>
  )
}

export default App
