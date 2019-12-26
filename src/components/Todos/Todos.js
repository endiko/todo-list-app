import React from 'react';
import './Todos.scss';
import Todo from '../Todo/Todo';

export default props => (
  <ul className='todo-list'>
    {props.todos.map((item, index) => (
      <Todo
        key={item.id}
        todo={item}
        onEditTodo={e => props.onEditTodo(e, index)}
        onDeleteTodo={() => props.onDeleteTodo(index)}
        onCompleteTodo={(e) => props.onCompleteTodo(e, index)}
      />
    ))}
  </ul>
);
