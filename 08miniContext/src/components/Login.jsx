//HOW TO SEND THE DATA
import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

//how to fetch the values in UserContext, useContext helps in this

function Login() {
    //we also require states for the input- username & password & also have to update them, so we used useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)   //we have to give the access of the context(here UserContext & setUser is in it only). We can also have other contexts like Card Context etc.

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    //creating the UI
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            {'   '}
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login