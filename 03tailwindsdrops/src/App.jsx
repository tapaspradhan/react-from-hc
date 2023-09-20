import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Tapas",
    age:27
  }
  let newArr=[1,2,3]

  return (
    <>
    <div >
      <h1 className='text-white bg-green-500 p-7 text-3xl mb-4 font-extrabold'>Using Taildwind In React Project</h1>
      
    </div>
    <div className='flex gap-3'>
    <Card username="Tapas Pradhan" btnText="click me" />
    <Card username="Tapas Pradhan Gaming"/>
    <Card username="Demo Card"/>

    </div>
    </>
  )
}

export default App
