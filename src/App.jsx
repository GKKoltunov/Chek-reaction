
import './App.scss'
import { Counter } from './components/Counter/Counter'
import { Target } from './components/Target/Target'
import { PositionProvider } from './providers/context/PositionProvider'

function App() {
  

  return (
    <>
      <PositionProvider>
      <div className='container'>
        <Target />
        <Counter />
        </div>
      </PositionProvider>
    </>
  )
}

export default App
