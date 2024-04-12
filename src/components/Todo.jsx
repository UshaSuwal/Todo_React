import { useState } from "react";

export function Todo() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [randomIndex, setRandomIndex] = useState(null);

  function add() {
    if (task) {
      setTodo([...todo, task]);
      setTask("");
    }
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  function displayRandom() {
    if (todo.length > 0) {
      let randomNum = Math.floor(Math.random() * todo.length);
      setRandomIndex(randomNum);
    }
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <nav className="w-full bg-cyan-100 p-4 text-white top-0 fixed">
        <div className="container mx-auto flex justify-between">
          <span className="text-3xl font-bold text-black">Todo App</span>
        </div>
      </nav>

      
      <div className="container mx-auto mt-24 flex gap-4 ">
        <div className="w-2/5 p-4 bg-white rounded-xl shadow-sm">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 mb-4"
            placeholder="Add a task..."
          />

          
          <div className="flex justify-between mb-4">
            <button
              onClick={add}
              className="w-1/2 p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Save
            </button>

            
            <button
              onClick={displayRandom}
              className="w-1/2 p-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition ml-2"
            >
              Random
            </button>
          </div>
        </div>



        <div className="w-1/3 p-4 bg-white rounded-xl shadow-sm">
          <div className="flex flex-col">
            {todo.map((task, index) => (
              <span key={index} className="p-2 bg-cyan-100 rounded-lg mb-2">
                {task}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <span className="text-lg font-bold">
              {randomIndex !== null ? todo[randomIndex] : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
