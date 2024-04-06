import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

// NOTES:

// in the AddTodo we 'll only create the form
// addTodo means we want to add in the store, & to add we use Dispatch so we have to dispatch an event
// store & reducers are the concepts of redux but useSelector & useDispatch are concepts of React(it's a wireup for redux)
// What does Dispatch do? -> Dispatch uses a reducer to add changes in the values of store
// We have to call the reducer inside the dispatch
// we have to send action.payload (text) to addTodo, means the user entered text so we write input
// we have used setInput('') to clean the value in the form passed by the user
// the work is simple: we have to use a dispatch & then pass a reducer & in that reducer we have to pass a value & if we want to access that value then it is in the action.payload of the object of that reducer
// we have used dispatch bcoz we have to dispact an action

// now we have to list all the todos
// we have created an initialState for todos, so initialState is an object but todos is an array, so we can loop through all the values & then get them 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
    }
    
    export default AddTodo