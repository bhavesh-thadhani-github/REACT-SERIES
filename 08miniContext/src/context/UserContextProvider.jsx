//we have craeted it JSX bcoz to make the Provider

import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    {/*we have to also write Provider. We pass the children like the card component, user component, so that they get access of the state of UserContext */}

    //we have to also give which data(thing) that UserContext.Provider 'll access. The value (for now 'null' here) 'll get access to UserContext.Provider(in it's value)
    const [user, setUser] = React.useState(null)    /*TO SET THE VALUE(through setUser in the input field).*/

    {/*we have to also tell that of which value access we are giving. bcoz of which we write value(it's a prop). We have passed an object, so whatever access we want to give we can give.*/}
    return(
        <UserContext.Provider value={{user, setUser}}>      {/*TO GET OR ACCESS THE VALUE(of user).*/}
        {children}                  
        </UserContext.Provider>
    )
}

export default UserContextProvider