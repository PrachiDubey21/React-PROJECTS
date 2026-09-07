import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mt-6">
      <input
        type="text"
        placeholder="Add something ... 🌸"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
        flex-1
        bg-white
        rounded-xl
        border-2 border-pink-200
        focus:border-purple-300
        focus:ring-2 focus:ring-purple-200
        text-gray-700
        px-4 py-2
        outline-none
        shadow-sm
        transition
        duration-200
        "
      />

      <button
        type="submit"
        className="
  bg-pink-400
  text-white
  px-5 py-2
  rounded-xl
  font-semibold
  shadow-sm

  hover:bg-pink-500
  hover:scale-105
  hover:shadow-md

  transition
  duration-200
  "
      >
        Add 
      </button>
    </form>
  );
}

export default AddTodo;
