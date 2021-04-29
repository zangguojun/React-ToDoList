import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id:'Rqf6uQcN72UNlc0eF4Yj4',name:'吃饭',done:true},
      {id:'GjBqSlZGXYT_k0wZ6FOZR',name:'睡觉',done:true},
      {id:'Rqf6uQcN72UNlc0eF4Yj5',name:'逛街',done:false},
    ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos] 
    this.setState({
      todos:newTodos
    })
  }

  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) {
        return {...todoObj,done}
      }
      return todoObj
    })
    this.setState({
      todos:newTodos
    })
  }
  
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todoObj => todoObj.id !== id)
    this.setState({
      todos:newTodos
    })
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todoObj => ({...todoObj,done}))
    this.setState({
      todos:newTodos
    })
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => todoObj.done === false)
    this.setState({
      todos:newTodos
    })
  }


  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}