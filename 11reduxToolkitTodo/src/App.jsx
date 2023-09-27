import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='text-center text-7xl font-black bg-yellow-600 py-11'>React Redux Tool kit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
