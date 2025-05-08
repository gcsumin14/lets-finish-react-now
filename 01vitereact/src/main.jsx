import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div id="root">
//       <h1>CUSTOM APP</h1>
//     </div>
//   )
// }
// const ReactElement = {
//   type : 'a',
//   props:{
//       href : 'https://google.com',
//       target : '_blank',
//   },
//   children : 'click me to visit google'
// } 
const anotherElement = (
  <a href="https://google.com" target="_blank">Go to Google</a>

)

{/* <>these empty tags in react is called fragments</> */}
createRoot(document.getElementById("root")).render(

      anotherElement //also can be executed like this MyApp()
);