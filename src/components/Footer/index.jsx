import React, { Component } from 'react'


import './index.css'

export default class Footer extends Component {


  handleCheck = (event) => {
    const {checkAllTodo} = this.props
    checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    if (window.confirm('确定要删除所有已勾选的选项吗？')){
      const {clearAllDone} = this.props
      clearAllDone()
    }
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,cur) => pre + (cur.done ? 1 : 0),0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheck}/>
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
