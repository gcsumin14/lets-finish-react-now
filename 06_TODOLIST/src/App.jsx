import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  // Calculate dynamic anxiety box properties
const pendingTasks = tasks.filter(task => !task.completed).length;
const anxietyHeight = Math.min(50 + pendingTasks * 20, 250); // Base 50px, max 250px
const anxietyColor = pendingTasks === 0 ? "blue-400" : "red";
const anxietyLabel = pendingTasks === 0 ? "Peace 😌" : "Anxiety 😵";


  const  handleAddTask = () => {
    if(input.trim()!==""){
      setTasks([...tasks,{text:input,completed:false}]);
      setInput(""); //clear the input after adding
    }
  };
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask = (indextodel)=>{
      const updatedTasks = tasks.filter((_,index)=>index !== indextodel);
      setTasks(updatedTasks)
  }
  
  return (
    <>
    <div className="flex flex-col gap-4 items-center min-h-screen  bg-gray-100 p-10">
      <h1 className="text-2xl text-center font-bold mb-5">TO DO LIST <br/> "JUST DO IT ✓"</h1>

      {/* Anxiety Box */}
      <div
        className="  text-white  bg-blue-400 rounded-md shadow-md mb-6 transition-all duration-500"
        style={{height:anxietyHeight, width:200, textAlign:"center", justifyContent:"center", backgroundColor: anxietyColor}}
      >
        <p className="text-center text-white pt-3 font-semibold">Anxiety</p>
      
        </div>
      {/* Task List */}
      <div>
        <ul>
          {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-2">
              <input type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>
              {task.text}
            </span>
            {/* deletebutton */}
            <button className="bg-black flex justify-between text-white px-2 py-2 rounded-md shadow cursor-pointer hover:bg-red-600 transition"
            onClick={()=>deleteTask(index)}>🗑️</button>
            
              </li>
          ))}
        </ul>
        </div>
        

      {/* Add Task Field (at the bottom) */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          value={input}
          placeholder="New task..."
          className="rounded-md px-3 py-2 outline-none shadow"
          onChange={(e)=> setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" ) {
              handleAddTask();
            }
          }}
          
        />
      <button
          className="bg-blue-700 text-white px-4 py-2 rounded-md shadow cursor-pointer hover:bg-blue-500"
          onClick={handleAddTask}
          style={{backgroundColor:anxietyColor}}>Add
      </button>
      
      </div>
    </div>
    </>
  );
}

export default App;
