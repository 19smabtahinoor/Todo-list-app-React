import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Todolist(props) {
    return(
        <>
        <li className="todo_lists">
          <p>{props.todoText}</p> 
          <DeleteOutlineIcon className="deleteButton" onClick={() => {
              props.onselect(props.id)
          }}/>
        </li>
        </>
      )
}
export default Todolist