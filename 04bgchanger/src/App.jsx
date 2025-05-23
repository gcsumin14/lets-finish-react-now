import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,Setcolor] = useState("red")

  return (
    <>
    <div  className='flex justify-center align-center p-5 m-2' style={{backgroundColor:"red"}}>
    <h1>WELCOME TO MY FIRST PROJECT</h1>
    <h2>BACKGROUND COLOR CHANGER</h2>
    </div>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:"white"}}>

    </div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px'>
      <div className='flex flex-wrap justify-center gap-5 shadow-2xl bg-white px-5 py-5 rounded-xl'>
        <button onClick={() =>Setcolor("red")} className='oultine-none px-4 py-2 rounded-xl' style={{backgroundColor:"red"}}>RED</button>
        <button className='oultine-none px-4 py-2 rounded-xl' style={{backgroundColor:"green"}}>GREEN</button>
        <button className='oultine-none px-4 py-2 rounded-xl' style={{backgroundColor:"blue"}}>BLUE</button>
        <button className='oultine-none px-4 py-2 rounded-xl' style={{backgroundColor:"yellow"}}>YELLOW</button>
        
      </div>
    </div>
    </>
  )
}

export default App
