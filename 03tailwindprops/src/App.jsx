import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    example: 'This is just for example',
    name: 'John',
    age: '21'
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl  mb-4'>Tailwind Test</h1>
      <Card username='john' btnText='click me' channel='chaiaurcode' someObje={myObj} newArray={newArr}/>
      <Card username='chaiaurcode' btnText='visit me'/>
      <Card/>   {/* here the default value of the btn will be passed */}
    </>
  )
}

export default App
