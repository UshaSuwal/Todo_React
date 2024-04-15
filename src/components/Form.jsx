import { Button } from "./Button";
import { Todo } from "./Todo";
import { useState} from 'react';

export function Form() {
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
      <div className="container mx-auto mt-24 flex justify-center gap-12">
        <div
          className="w-2/5 p-10 bg-gray-700 rounded-xl shadow-lg"
          style={{ boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)" }}
        >
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a task..."
            style={{ height: "150px", color: "black" }}
          />

          <div className="flex justify-between mb-4">


            <Button clicked={add} color={"red"} icon={"fa-solid fa-floppy-disk ml-2"} text={"Save"}/>
            <Button clicked={displayRandom} color={"gray"} icon={"fa-solid fa-shuffle ml-2"} text={"Random"} />
            
          </div>

          <div
            className="mt-10 p-2 text-white text-xl"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            {randomIndex !== null && todo[randomIndex]}
          </div>
        </div>

        <Todo todo={todo} />
      </div>
    </div>
  );
}
