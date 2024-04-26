import React , {useState} from 'react'
import './style.css'

const TodoList = () => {
    const [todos , setTodos] = useState(['item 1','item 2'])
    const [newTodo,setNewTodo] = useState('')
    const addTodo = () => {
        if(setNewTodo == ''){
            alert('bos buraxmag olmaz')
        }
        else{
            setTodos([...todos,newTodo])
            setNewTodo('')
        }
    }
  return (
    <div>
        <input type="text" value={newTodo} placeholder='...'  onChange={(r) =>{
            setNewTodo(r.target.value)
        }}/>
        <button onClick={addTodo}>click</button>

        <ul>
            {todos.map((e,i) =>{
                return <li key={i}>{e}</li>
            } )}
        </ul>

    </div>
  )
}

export default TodoList;