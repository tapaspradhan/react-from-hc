import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className="bg-orange-600 text-3xl py-4 text-white" >Context API</h1>
    </UserContextProvider>
  )
}

export default App
