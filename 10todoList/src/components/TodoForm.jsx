import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-3
      bg-[#F5F1E8]/80 backdrop-blur-md
      p-3 rounded-2xl shadow-lg
      border border-[#D6D2C4]
      hover:shadow-xl transition duration-300"
    >

      <input
        type="text"
        placeholder="Write your task..."
        className="w-full px-4 py-2.5
        rounded-xl bg-white/80
        text-[#3E4B43]
        placeholder:text-[#9CA3AF]
        outline-none border
        border-[#D6D2C4]
        focus:border-[#7A8F7A]
        focus:ring-2 focus:ring-[#AFC4B5]/40
        transition duration-200"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="px-5 py-2.5 rounded-xl
        bg-[#6F8A75] hover:bg-[#5F7865]
        text-white font-medium
        shadow-md hover:shadow-lg
        active:scale-95
        transition duration-200
        border border-[#AFC4B5]"
      >
        Add
      </button>
      
    </form>
  );
}

export default TodoForm;