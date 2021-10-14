import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First Todo', done: false },
    { id: 2, title: 'Second Todo', done: false },
    { id: 3, title: 'Third Todo', done: false },
  ]);

  const saveTodo = (todo) => {
    const { title } = todo;

    const newTodo = {
      id: todos.length + 1,
      title: title,
      done: false
    };

    setTodos([...todos, newTodo]);
  } 

  return (
    <TodoContext.Provider value={{ todos, saveTodo }}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoProvider;