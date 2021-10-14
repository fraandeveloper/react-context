import React, { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);
  const [ todo, setTodo ] = useState();

  const handlePreventForm = (evt) => {
    evt.preventDefault();

    saveTodo(todo);
  }

  const handleInputChange = (evt) => {
    setTodo({
      ...todo,
      title: evt.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handlePreventForm}>
        <input type="text" id="todo" placeholder="Escreva sua tarefa" onChange={handleInputChange} />
        <button>Adicionar</button>
      </form>
    </div>
  )
}

export default AddTodo;