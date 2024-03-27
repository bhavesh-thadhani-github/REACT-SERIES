import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}*/

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

// the below code is predefined react code to create custom elements(like the above object)
const reactElement = React.createElement(
    'a',    //name of the tag
    {       //in the object we have to pass custom attributes(this line is mandatory)
        href: 'https://google.com',
        target: '_blank'
    },
    'click me to visit google',  //text inside the tag
    anotherUser     //after the full dom tree gets created we inject the variable at the end
)

ReactDOM.createRoot(document.getElementById('root')).render(    //passing the below values in the root id(which is a div)
    // MyApp()  <-- we can also execute like this(bcoz it's a function), but not recommended 

    // <reactElement/>  <-- this will not get execute bcoz it's not a function(end of the day every function parses into this by react but we can't execute this)
    // the above line will not work bcoz we have written a custom object & passing it to the react created render function(we have not written the custom render code as in the customReact.js file)
    // we have a particular syntx to work the above line

    /*<>
    <App/>
    <MyApp/>    
    </>*/
    // running the function of same file (This code is for above MyApp line)

    // anotherElement  //it 'll get converted to an object(we've have not pass any parantheses or any tags but then also it works)
    reactElement

)
