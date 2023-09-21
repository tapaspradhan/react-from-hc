import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      let [counter,setCounter]=useState(15)
  // let counter=15;
  const addValue=()=>{
    counter=counter + 1;
    setCounter(counter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    
  }
  const decValue=()=>{
    
    if(counter===0){
      alert("Can't negative value")
    }else{
      setCounter(counter-1)
    }
  }
  

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}
      >Add Value</button>
      <br /><br />
      <button
        onClick={decValue}
      >Decrease Value</button>
    </>
  )
}

export default App
