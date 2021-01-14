import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component{

  state = {
    todos: []
  }

  componentDidMount(){
    let data = [];
    if(localStorage.data){
      data = JSON.parse(localStorage.data);
    }
    this.setState({
      todos: data
    })
  }

  addIntoTodos = (todo) => {
      todo.id = Math.random()*999*10+5;
      localStorage.data = JSON.stringify([...this.state.todos, todo]);
      this.setState({
        todos:[...this.state.todos, todo]
      })
    }


  markTodo = (index) => {
      const copyTodos = [...this.state.todos];
      copyTodos[index].done = !copyTodos[index].done;
      localStorage.data = JSON.stringify(copyTodos);
      this.setState({
        todos: copyTodos
      })
  }

  deleteTodo = (index) => {
    const copyTodos = [...this.state.todos];
    copyTodos.splice(index, 1);
    localStorage.data = JSON.stringify(copyTodos);
    this.setState({
      todos: copyTodos
    })
  }


  render(){
    return(
        <div className="wrapp">
          <Jumbotron />
          <NewTodo addIntoTodos={this.addIntoTodos}/>
          <TodoList markTodo={this.markTodo} todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      )
  }
}

export default App;
