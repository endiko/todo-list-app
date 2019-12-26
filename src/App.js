import React, { Component } from 'react';
import './App.scss';
import Todos from './components/Todos/Todos';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const textPlaceholder = 'New todo ...';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newText: textPlaceholder
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

  completeTodoHandler = (e, index) => {
    let todo = this.state.todos[index];
    todo.completed = e.target.checked;
    let copyTodos = [...this.state.todos];
    copyTodos[index] = todo;
    this.setState({
      todos: copyTodos
    })
  }

  inputFocusHandler = () => {
    this.setState({
      newText: ''
    })
  }

  inputChangeHandler = (e) => {
    this.setState({
      newText: e.target.value
    })
  }

  onEnterKeyHandler = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      let newTodo = {};
      let len = this.state.todos.length;
      newTodo.userId = this.state.todos[0].userId;
      newTodo.id = len + 1;
      newTodo.title = e.target.value;
      newTodo.completed = false;
      let copyTodos = [...this.state.todos];
      copyTodos.push(newTodo);
      this.setState({
        todos: copyTodos,
        newText: ''
      })
    }
  }

  inputBlurHandler = () => {
    this.setState({
      newText: textPlaceholder
    })
  }
  render() {
    console.log('Render');
    const todos = this.state.todos;
    return (
      <div className='container'>
        <h1 className="main-title">ToDo List</h1>
        <div className="new-todo__container">
          <label htmlFor="newTodo">
            <input type="text" name="newTodo" className="new-todo__text" placeholder={this.state.newText} value={this.state.newText} onClick={this.inputFocusHandler} onBlur={this.inputBlurHandler} onChange={this.inputChangeHandler} onKeyPress={this.onEnterKeyHandler} onke />
          </label>
        </div>
        <Todos
          todos={todos}
          onEditTodo={this.editTodoHandler}
          onDeleteTodo={this.deleteTodoHandler}
          onCompleteTodo={this.completeTodoHandler}
        />
      </div>
    );
  }
}

export default App;
