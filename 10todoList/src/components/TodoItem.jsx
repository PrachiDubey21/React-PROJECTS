import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex flex-col justify-between p-4 rounded-2xl border
      shadow-md transition-all duration-500 ease-in-out
      min-h-[120px]

      ${
        todo.completed
          ? "bg-[#D6E2D9] border-[#AFC4B5] scale-[1.01]"
          : "bg-[#F5F1E8] border-[#D6D2C4]"
      }`}
    >

      {/* Top Section */}
      <div className="flex items-start gap-3">

        {/* Checkbox */}
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 accent-[#6F8A75] cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />

        {/* Text */}
        <input
          type="text"
          className={`w-full bg-transparent outline-none
          text-lg font-medium leading-snug transition-all duration-300

          ${
            isTodoEditable
              ? "border border-[#AFC4B5] px-2 py-1 rounded-lg bg-white/70"
              : "border-transparent"
          }

          ${
            todo.completed
              ? "line-through text-[#9AA5A0]"
              : "text-[#3E4B43]"
          }`}
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4">

        {/* Tag */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium transition

          ${
            todo.completed
              ? "bg-[#DDE7E1] text-[#5F6F65]"
              : "bg-[#EDE7DC] text-[#7A8F7A]"
          }`}
        >
          {todo.completed ? "Done " : "Pending "}
        </span>

        {/* Buttons */}
        <div className="flex gap-2">

          <button
            className="px-3 py-1 text-sm rounded-lg
            bg-[#E8EFEA] text-[#3E4B43]
            hover:bg-[#DDE7E1]
            transition shadow-sm hover:shadow
            disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "save" : "edit"}
          </button>

          <button
            className="px-3 py-1 text-sm rounded-lg
            bg-[#F3E4E2] text-[#7B4B4B]
            hover:bg-[#EAD2CF]
            transition shadow-sm hover:shadow"
            onClick={() => deleteTodo(todo.id)}
          >
            del
          </button>

        </div>
      </div>
    </div>
  );
}

export default TodoItem;