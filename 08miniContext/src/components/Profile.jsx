//HOW TO GET THE DATA
import React, {useContext} from "react";
//There are many contexts, so we have to tell which context we want (to import).
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext)  //we have used 'user' bcoz we want the data not the method
    
    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile