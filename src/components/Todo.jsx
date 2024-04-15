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
    <div className="p-4 bg-black min-h-screen flex flex-col items-center">
      <nav className="w-full bg-black p-4 text-white top-0 fixed">
        <div className="container mx-auto flex justify-between">
          <span className="text-3xl font-bold text-red-500">Todo App</span>
        </div>
      </nav>

      <div className="container mx-auto mt-24 flex justify-center gap-12">
        <div
          className="w-2/5 p-10 bg-gray-800 rounded-xl shadow-lg"
          style={{ boxShadow: '0 10px 15px rgba(255, 255, 255, 0.2)' }}
        >
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a task..."
            style={{ height: '150px', color: 'black' }}
          />

          <div className="flex justify-between mb-4">
            <button
              onClick={add}
              className="w-1/2 p-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
            >
              Save
            </button>

            <button
              onClick={displayRandom}
              className="w-1/2 p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition ml-2"
            >
              Random
            </button>
          </div>

          <div className="mt-10 p-2 text-white text-xl">
            {randomIndex !== null && todo[randomIndex]}
          </div>
        </div>

        <div
          className="w-2/4 p-4 bg-gray-800 rounded-xl shadow-lg"
          style={{
            boxShadow: '0 10px 15px rgba(255, 255, 255, 0.2)',
            height: '450px',
          }}
        >
          <div className="flex flex-col overflow-y-auto" style={{ maxHeight: '100%' }}>
            {todo.map((task, index) => (
              <span key={index} className="p-2 bg-red-100 rounded-lg mb-2 text-black">
                {task}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
