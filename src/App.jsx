import { useState } from 'react'
import './App.css'
import { Assignement1 } from './components/useRef1'
import { Assignement2 } from './components/useRef2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Assignement2 />
    </>
  )
}

export default App
