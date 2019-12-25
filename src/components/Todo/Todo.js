import React from 'react';
import './Todo.scss';

export default props => (
  <li className='todo-item'>
    <label className='label'>
      <input type='checkbox' className='todo-checkbox' />
    </label>
    <label className='label'>
      <input
        type='text'
        className='todo-text'
        placeholder={props.title}
        value={props.title}
        onChange={props.onEditTodo}
      />
    </label>

    <button className='btn btn--delete' onClick={props.onDeleteTodo}>
      <span className='btn-text btn-text--delete'>&times;</span>
    </button>
  </li>
);
