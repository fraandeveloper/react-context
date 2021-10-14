import React from 'react';

import TodoProvider from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <TodoProvider>
        <AddTodo></AddTodo>
       <TodoList></TodoList>
    </TodoProvider>
  )
}

export default App;
