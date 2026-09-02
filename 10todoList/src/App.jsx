//local storage used
//context API used
//tailwind used

//functionality -> add , checked/unchecked , edit , save , delete , read/listing

import { useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {

    setTodos((prev) => [ { id: Date.now() , ...todo } , ...prev ]);

  };

  const updateTodo = (id, todo) => {

    setTodos ( (prev) => prev.map( (prevTodo) => 
      (prevTodo.id === id ? todo : prevTodo  )))

  };

  const deleteTodo = (id) => {

   setTodos((prev) => prev.filter( (todo) => todo.id !== id))

  }

  const toggleComplete = (id) => {
   
   setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo ))
      
      }

  //local storage
  useEffect( () => {
     const todos = JSON.parse(localStorage.getItem("todos"))

     if(todos && todos.length > 0){
      setTodos(todos)
     }

  } , [])


  useEffect( () => {

    localStorage.setItem("todos" , JSON.stringify(todos))

  } , [todos])


  return (

     <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/*  Background Gradient */}
      <div
        className="min-h-screen py-10 px-4
        bg-gradient-to-br 
       from-[#f3f8f2] 
       via-[#dce8d9] 
       to-[#b7cdb2]"
      >

        {/*  Main Container */}
        <div
          className="w-full max-w-3xl mx-auto 
          bg-white/60 backdrop-blur-lg 
          border border-[#e6d5c3] 
          shadow-xl rounded-3xl p-6"
        >

          {/*  Heading */}
          <h1 className="text-3xl font-semibold 
          text-center mb-6 text-[#6b5e52] tracking-wide">
             Todo List
          </h1>

          {/*  Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/*  Empty State */}
          {todos.length === 0 && (
            <div className="text-center text-gray-400 text-lg py-10">
              🌿 No tasks yet...
            </div>
          )}

          {/*  Grid (2 cards per row) */}
          <div className="grid grid-cols-2 gap-4">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

        </div>

      </div>
      
    </TodoProvider>
    
  );
}

export default App;