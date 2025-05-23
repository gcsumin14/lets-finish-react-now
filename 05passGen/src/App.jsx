import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numallowed,setnumallowed] = useState(false);
  const [charallowed,setcharallowed] = useState(false);
  const [pass,setpass] = useState("")

  //useRef hook
  const passRef = useRef(null)


  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "~!@#$%^&*()_+{}[]";
  
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
  
    setpass(pass);
  }, [length, numallowed, charallowed, setpass]);
  

  const copytoclipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(()=>{
    passgen()
  },[length,numallowed,charallowed,passgen])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-9 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white'>PASSWORD GENERATOR</h1>
        
        <div className='flex rounded-lg overflow-hidden mb-4 shadow text-black bg-white'>
          <input 
            type="text"
            value={pass}  
            className='outline-none w-full py-1 px-3 text-black' 
            placeholder='password' 
            readOnly
            ref={passRef}
          />
          <button onClick={copytoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-500 ' >COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-0.5 py-1'>
          <label> LENGTH : {length}</label>
          <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='hover:cursor-pointer mx-0.5'
            onChange={(e)=> {setLength(e.target.value)}
            }
            />
            
        <input 
            type='checkbox'
            defaultChecked ={numallowed}
            id='number-input'
            className='hover:cursor-pointer'
            onChange={()=>{
              setnumallowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberinput">Numbers</label>

            <input 
            type='checkbox'
            defaultChecked ={charallowed}
            id='char-input'
            className='cursor-pointer'
            onChange={()=>{
              setcharallowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberinput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App
