import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [superman, setCount] = useState(15) //const [counter, function] function controls the counter
  // var counter = 15
  const addValue = () => {
    // console.log("clicked",superman);
    // superman = superman + 1 //"no need"
    if (superman<20){
    setCount(superman+1)}

  }
  function removeValue(){
    // console.log("clicked",superman);
    // superman = superman + 1 //"no need"
    if(superman>0){
    setCount(superman-1)}
  }
  return (
    <>
    <h1> chai aur react </h1>
    <h2>counter value : {superman}</h2>
    <button
    onClick={addValue}>
      add value</button>
    <br/>
    <button
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App


