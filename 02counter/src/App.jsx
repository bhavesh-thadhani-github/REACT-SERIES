import { useState } from 'react'  //this useState is a hook(if we want to use any hook then we want to import it this way only)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //useState gives you 2 values in the form of array(the 1st is the variable, 2nd is a method, you can give any name to them)
  // the default value in the variable 'll be 15 bcoz we pass 15 in the useState braces. The setCounter function 'll be responsible for the change in the counter value

  // let counter = 15;

  const addValue = () => {
    if(counter >= 0 && counter < 20){
      counter = counter + 1   // bcoz of this, state & UI 'll get changed at all places
      setCounter(counter)   //in all these code the value get updated by 1 only(bcoz react send in bundle)
      /*setCounter(counter)
      setCounter(counter)
      setCounter(counter)*/

      //in the below code each time (means here 4) the value 'll get updated
      /*setCounter(prevCounter => prevCounter+1)  
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)*/
      console.log('clicked', counter);
    }  
  }

  const removeValue = () => {
    if(counter > 0 && counter <= 20){
      setCounter(counter -
         1)   //another way to update the value
      console.log('clicked', counter);
    }
  }

  return (
    <>

      <h1>Chai aur react</h1> 
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
