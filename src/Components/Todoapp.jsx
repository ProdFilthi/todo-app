import { useState } from "react";
import { FaBook, FaTrash } from "react-icons/fa";

const Todoapp = () => {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setTasks(e.target.value);
  };
  const AddTodo = () => {
    if (tasks.trim() !== "") {
      setTodos([...todos, { text: tasks, completed: false }]);
      setTasks("");
    }
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      AddTodo();
    }
  };
  const deleteTodo = (index) => {
    const newTasks = todos.filter((_, i) => i !== index);
    setTodos(newTasks);
  };
  const toggleCompletion = (index) => {
    const updatedTasks = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTasks);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-96 min-h-96">
      <div className="flex items-center justify-between px-1 text-xl">
        <h1>Todo</h1>
        <FaBook />
      </div>
      <div className="flex items-center justify-center mt-4">
        <input
          onKeyDown={keyPress}
          value={tasks}
          onChange={handleInputChange}
          type="text"
          placeholder="Add Task..."
          className="bg-neutral-300 px-4 py-4 rounded-l-md w-60 shadow-lg cursor-pointer"
        />
        <h1
          onClick={AddTodo}
          className="bg-blue-500 text-white py-4 w-24 text-center rounded-r-md shadow-lg cursor-pointer"
        >
          Add Task
        </h1>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 mt-4 text-xl"
          >
            <span
              onClick={() => toggleCompletion(index)}
              className={`cursor-pointer ${
                todo.completed ? "text-blue-500 line-through" : "text-black"
              }`}
            >
              {todo.text}
            </span>
            <FaTrash
              className="cursor-pointer"
              onClick={() => deleteTodo(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todoapp;
