import React from 'react'

function TodoList(props) {
    return(
        <>
        <li className="todo_lists">
          <p>{props.todoText}</p> 
          <span className="material-icons deleteButton" onClick={() => {
              props.onselect(props.id)
          }}>&#xe14c;</span>
        </li>
        </>
      )
}
export default TodoList