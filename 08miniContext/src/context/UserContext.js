//the file name is JS bcoz here 'll be pure JS only.
//like we have user Context, we can also have login context, product context, card context, we can create multiple contexts.

import React from "react";

//now we have to create the context
//React.createContext() is a method just like useState
const UserContext = React.createContext()

//when we create the context, the Context give us a thing called Provider, bcoz it's providing a variable.
//So every Context is a Provider.
export default UserContext



//Example:
//since we have wrapped the components with the userContext, now it has become a Provider, means any components inside it 'll get access of that (global) UserContext
//These are components inside the Provider. These components can get access of all states through UserContext
/*<UserContext>   
    </Login>    
    <Card>
        <Data/>    
    <Card/>
<UserContext/>*/