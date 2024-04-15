export function Todo({ todo }) {
  return (
    <div
      className="w-2/4 p-4 bg-gray-800 rounded-xl shadow-lg"
      style={{
        boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)",
        height: "450px",
      }}
    >
      <div
        className="flex flex-col overflow-y-auto"
        style={{ maxHeight: "100%" }}
      >
        {todo.map((task, index) => (
          <div key={index} className="flex mb-2">
            <div
              className="text-white mr-2 mt-1"
              style={{ fontFamily: "Philosopher, sans-serif" }}
            >
              {index + 1}.
            </div>
            <span
              key={index}
              className="p-1 bg-sky-100 rounded mb-2 text-black w-full"
              style={{ fontFamily: "Philosopher, sans-serif" }}
            >
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
