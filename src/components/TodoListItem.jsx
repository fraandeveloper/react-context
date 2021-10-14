import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <p>{todo.id} - {todo.title} / {todo.done ? "true" : "false"}</p>
    </div>
  )
}

export default TodoListItem;