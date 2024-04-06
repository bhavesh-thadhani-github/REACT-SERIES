import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid generates unique ids
//how the store 'll look initially, whether it 'll be empty or data from the db, so for this we create initialState
//initialState can be array or object, depned on you
const initialState = {
    todos:[{id: 1, text: 'Hello World'}]
}

//NOTES:

// reducer is a function & slice is a bigger version of reducer
// we can create slice through createSlice which is a method & mostly we pass objects to that method. 
// Slices also has name
// name is a predefined property by RTK
// every slice also has an initialState. We can also write the initialState after the colons in the object only.
// reducers have properties & functions
// we can also write addTodo globally & give its reference.
// When we use contextAPI we were just defining the func. & not writing its functionality but here we have to write its functionality also.
// we always get 2 things: state & action
// state: all the values in the initialState. Give the values of hand-to-hand(current & updated) situation like sometime we have 5 todos(objects), another time 10
// action: when we want to remove a todo then we want id which we get from action. (data which is being passed)
// we have used nanoid() to generate a random id
// we 'll take the text by using action, we 'll get the value in payload (payload is an object, we can also access other properties like id, email, etc.)
// -> text: action.payload, we can also write this like-> text: action.payload.text, but since we have added the property name as text we don't have to write text necessarily
// We have created the todo but not added it to state, we have to update the state so we used state.todos.push(todo).

// we have learnt how to access state & how to remove through action
// now to remove a todo we can use filter in removeTodo & overwrite the state.todos by deleting the selected todo(id)
// we are updating the state.todos by adding todo that do not match with the user selected id. Only the user selected id's todo 'll not add to state.todos. Filter always gives True value
// exporting-> the functionalities like addTodo, removeTodo. Through them only we update the state, so we have to export them individually. Individial Functionality 'll be used in our components
// we get the value through the actions of todoSlice.actions
// store should also have the awareness of all the reducers. All the reducers(values) we pass in the store, the store can take values from that reducers only, (it's a restricitve store) so we have to give the list of all the reducers

// we have done all the logic part here. Now we create components like addTodo & removeTodo. AddTodo 'll teach us how to send the data & removeTodo teach us how to receive the data. So now we learn useSelector & useDispatch

//ASSIGNMENT: TO ALSO CREATE UPDATE OPTION 
export const todoSlice = createSlice({
    name: 'todo',   
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer