import React from 'react';
import './Todo.scss';

export default props => {
  let labelForStyle = `todoText-${props.todo.id}`;

  return (
    <li className='todo-item'>
      <input type='checkbox' name="checkbox" id={labelForStyle} aria-label='original checkbox' checked={props.todo.completed}
        onChange={props.onCompleteTodo} />
      <label className='label' htmlFor={labelForStyle}>
        <span className="todo-checkbox" aria-label='custom checkbox'></span>
        <input
          type='text'
          name="todoText"
          className='todo-text'
          placeholder={props.todo.title}
          aria-label='to do single item'
          value={props.todo.title}
          onChange={props.onEditTodo}
          readOnly={props.todo.completed}
        />
      </label>

      <button className='btn btn--delete' aria-label='delete button' onClick={props.onDeleteTodo}>
        <span className='btn-text btn-text--delete'>&times;</span>
      </button>
    </li>
  )
};
