import React from "react";

const Todo = ({todo, index, markTodo, deleteTodo}) => {

  return(
      <div className="col-4">
        <div className="card text-center">
          <div className="card-header">Todo: {index+1}</div>
          <div className="card-body"><h3 className={todo.done ? 'completed' : 'incompleted'}>{todo.msg}</h3></div>
          <div className="card-footer">
          <button onClick={()=>deleteTodo(index)} className="btn btn-danger float-left">Delete</button>
          <button onClick={()=>markTodo(index)} className="btn btn-success float-right">Mark</button>
          </div>
        </div>
      </div>

  )

}

export default Todo;
