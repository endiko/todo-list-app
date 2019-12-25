import React from 'react';
import './Todos.scss';
import Todo from '../Todo/Todo';

export default props => (
  <ul className='todo-list'>
    {props.todos.map((item, index) => (
      <Todo
        key={item.id}
        title={item.title}
        onEditTodo={e => props.onEditTodo(e, index)}
        onDeleteTodo={() => props.onDeleteTodo(index)}
      />
    ))}
  </ul>
);
