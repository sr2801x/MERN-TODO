import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [text, setText] = useState('')
const [todos, setTodos] = useState([])


  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>TODO LIST APP</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter todo here' />
      <button onClick={async() => {
        const res = await axios.post('http://localhost:4000/todos', { text })
        setTodos([...todos, res.data])
        setText('')
      }}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={async() => {
              await axios.delete(`http://localhost:4000/todo/${todo._id}`)
              setTodos(todos.filter(t => t._id !== todo._id))
            }}>Delete</button>
          </li>
        ))}
      </ul>   
    </>
  )
}

export default App
