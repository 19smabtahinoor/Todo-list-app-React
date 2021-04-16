import React, { useState } from "react";
import './App.css';
import TodoList from './Todolist'

function App() {
  
  const inputBorder = '1px solid white'
  const inputPlaceholder = 'Add Todo'
  const [todo, setstate] = useState("")
  const [items, setItems] = useState([])
  const [newBorder,setNewBorder] = useState(inputBorder)
  const [newPlaceholder,setNewPlaceholder] = useState(inputPlaceholder)

  const inputValue = (e) => {
    const uservalue = e.target.value
      setstate(uservalue)
  }

  const addTodo = (e) => {
    e.preventDefault()
    
    if(todo === ''){
      let newBorderred = '2px solid red'
      setNewBorder(newBorderred)

      let newPlaceholdered = 'You must write anything'
      setNewPlaceholder(newPlaceholdered)
      
    }else{
      // setItems((oldItems) => {
      //   return [...oldItems, todo]
      // })
      setItems([...items, todo])
    }
    setstate('')
  }

  const refreshTodo = () => {
    setItems([])
  }

  const deleteitems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter( (arr,index) => {
        return index !== id
      })
    })
}


  return (
    <div className="container">

      <header>
        <img src="https://zonayedpca.github.io/ReactToDo/static/media/logo.5d5d9eef.svg" alt="reactLogo" className="react_logo" />
        <h1 className="todo_list_heading">Todo List App</h1>
      </header>

      <div className="inputBoxs">
        <input type="text" placeholder={newPlaceholder} className="todo_list_input" onChange={inputValue} value={todo} style={{border:newBorder}}/>
        <button className="todo_add_btn" onClick={addTodo} >
          <span className="material-icons addBtn">&#xe145;</span>
        </button>

        <button className="todo_refresh_btn" onClick={refreshTodo}>
          <span className="material-icons refreshbtn">&#xe5d5;</span>
        </button>

      </div>

      <div className="todo_itmes">
        <ul className="todo_list_container">

          {items.map((itemsValue,index) => {
            return (
              <TodoList 
                key = {index}
                id = {index}
                todoText= {itemsValue}
                onselect = {deleteitems}
              />
            )
          })}
        </ul>
      </div>

      <div className="project_maker">
        <p> Made by <a href="https://github.com/19smabtahinor" target="_blank" rel="noreferrer">S.M.Abtahi Noor</a></p>
      </div>
    </div>
  );
}

export default App;
