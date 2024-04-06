import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// EVERY APPLICATION HAS ONLY ONE STORE (WHICH IS CALLED SINGLE SOURCE OF TRUTH)

// In the below store, we have only 1 key-value pair(bcoz we want to store all the reducers), we can have multiple
// whenever a value gets updated in the store, it does not take all the updated values. This is not a data-flow, so bcoz of this we have to tell it reducers.
// Hence we created features-> todo-> todoSlice(we can write the file name as we want)

export const store = configureStore({        //this takes an object
    reducer: todoReducer
})