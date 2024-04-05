import {createContext, useContext} from 'react'

//At todos:  every todo 'll be an object
//At todos:  any component that we have, we take the todos list from here only

//At addTodo:  we are just defining the function, the functionality we 'll create in the App.jsx or any other file. For bigger & more complex projects we do not write like this instead we use libraries like zustand or redux.
//At addTodo:  we are taking a parameter todo, which we 'll take from the todos object. 
// Main Function: To add (or display) the Todo

export const  TodoContext = createContext({
    todos: [{
        id: 1,
        todo: 'Todo msg',
        completed: false,
    }],
    addTodo: (todo) => {},   
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
//At TodoProvider: the TodoProvider 'll have access of all the values of TodoContext