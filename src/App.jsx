import Counter from './features/counter/counter'
import Coin from './features/coin/coin'
import Theme from './features/theme/theme'
function App() {

    
  return (
    <>
      <div className='h-screen bg-blue-400 w-screen flex  flex-col justify-center gap-2.5  items-center '>
       <Theme/>
       <Counter/>
       <Coin /> 

      </div>
    </>
  )
}

export default App
