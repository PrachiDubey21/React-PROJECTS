import { createContext, useContext } from "react";

// Create Context with default values
export const TodoContext = createContext({

  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],

  // Methods
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},

});

// Custom Hook
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider
export const TodoProvider = TodoContext.Provider;