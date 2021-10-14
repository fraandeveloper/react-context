import React, { useContext } from 'react';

import { TodoContext } from '../context/TodoContext';
import TodoListItem from '../components/TodoListItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
     <div>
      {
        todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo}></TodoListItem>
        ))
      }
     </div>
  )
}

export default TodoList;