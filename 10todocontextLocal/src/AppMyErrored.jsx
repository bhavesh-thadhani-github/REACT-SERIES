import { useEffect, useState } from "react";
import {TodoProvider} from './contexts'
import "./App.css";
import TodoForm from './components/TodoForm' 
import TodoItem from "./components/TodoItem";

function App() {

  //here todos is an array in which there are many values
  const [todos, setTodos] = useState([])  //In the todos: we have all the todos(means the array of all todos), not an individual todo

  //ADDING FUNTIONALITY
  // 1) setTodos 'll have all the arrays(todos), so we have passed a function in which the parameter 'll have older arrays & after that we are adding a new object(todo) & after it we are adding the previous arrays(todos)
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // 2) prev(array), prev.map(going to each object) ,prevTodo(individual object for a particular todo)
  // if the value is true then add another todo(which we have passed in the parameter), if it is false then remain the todo(object) as it is
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))    
  }

  // 3) in the filter we get all the objects(todos) that do not match the id value & the object's id that match the passed id value 'll not add 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // 4)
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) //to convert it into JSON. Here 'todos' is a key

    if (todos && todos.length > 0) {  //here we are checking the length of the todos array(which is in JSON form, arrays can be in JSON format)
      setTodos(todos)      
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))  //we have to pass key & value while using setItem & only key while using getItem
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;