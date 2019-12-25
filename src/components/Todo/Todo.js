import React from 'react';
import './Todo.scss';

export default props => (
  <li className='todo-item'>
    <label className='label' htmlFor="checkbox">
      <input type='checkbox' name="checkbox" className='todo-checkbox' />
    </label>
    <label className='label' htmlFor="todoText">
      <input
        type='text'
        name="todoText"
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
