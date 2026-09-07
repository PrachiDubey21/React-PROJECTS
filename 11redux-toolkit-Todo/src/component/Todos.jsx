import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <h2 className="text-center text-pink-500 font-semibold mt-6">
         Your Todos 
      </h2>

      {/*  Empty State */}
      {todos.length === 0 ? (
        <p className="text-center text-pink-400 mt-4">
          No todos yet 💭
        </p>
      ) : (
        <ul className="list-none mt-4 space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="
              flex justify-between items-center
              bg-white/80 backdrop-blur-md
              px-4 py-3 rounded-xl

              border-l-4 border-pink-400
              shadow-sm

              hover:shadow-md hover:scale-[1.02]
              transition duration-200
              "
            >
              {/*  Todo text */}
              <span className="text-gray-700 font-medium">
                {todo.text}
              </span>

              {/*  Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="
                bg-pink-400
                hover:bg-pink-500

                text-white
                p-2
                rounded-lg

                shadow-sm
                hover:shadow-md
                hover:scale-105

                transition duration-200
                "
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Todos