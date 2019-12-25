import React, { Component } from 'react';
import './App.scss';
import Todos from './components/Todos/Todos';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    console.log('component Did Mount');
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(
        result => {
          this.setState({
            todos: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  editTodoHandler = (e, index) => {
    let copyTodo = [...this.state.todos];
    let todo = copyTodo[index];
    todo.title = e.target.value;
    copyTodo[index] = todo;
    this.setState({
      todos: copyTodo
    });
  };
  deleteTodoHandler = index => {
    let copyTodo = [...this.state.todos];
    copyTodo.splice(index, 1);
    this.setState({
      todos: copyTodo
    });
  };

  render() {
    console.log('Render');
    const todos = this.state.todos;
    return (
      <div className='container'>
        <h1>ToDo List</h1>
        <form></form>
        <Todos
          todos={todos}
          onEditTodo={this.editTodoHandler}
          onDeleteTodo={this.deleteTodoHandler}
        />
      </div>
    );
  }
}

export default App;
