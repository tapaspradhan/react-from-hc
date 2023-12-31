import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className="bg-orange-600 text-3xl py-4 text-white" >Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
