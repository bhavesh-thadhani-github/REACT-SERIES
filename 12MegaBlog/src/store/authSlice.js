import {createSlice} from '@reduxjs/toolkit'

// This work is for we are asking the store that the user is authenticated or not

const initialState = {
    status: false,  //that user is not authenticated right now
    userData: null  //that there is no user data by default(since the status is false)
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //whatever there is in the reducers have the access of state & action, we get payload from the action.
        //whatever value we want to update in the state get updated in the track in initialState
        //if someone has use the method or dispatch it then do the following things(inside the login function)
        login: (state, action) => {
            state.status = true;
            //also add userData(since the status is true)
            state.userData = action.payload.userData    //we have to dispatch the userData so that we get the userData in the action (can skip the userData after payload)
        },
        logout: (state) => {    //we have the access of action but no use of it here
            state.status = false;
            state.userData = null
        }
    }
    //ASSIGNMENT(after the end of the project):
    //we have created the slice for auth & also have to create for POST
    //we can add state.allPost, state.userPost like we have created state.userData
})
export const {login, logout} = authSlice.actions    //we export the inidvidual reducers like this using actions
export default authSlice.reducer    //exporting the reducers object in authSlice
//we have to also export inidvidual reducers separately so differnet components can use that functions to know the state, or dispatch from that method.
//1st method is login