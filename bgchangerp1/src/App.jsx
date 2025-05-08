import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header><h1 className='p'>WELCOME TO MY FIRST PROJECT</h1>
    <h2>BACKGROUND COLOR CHANGER</h2>
    </header>
    </>
  )
}

export default App
