import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// we are importing RouterProvider from react-router-dom to use it in the react strictmode
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'

// we have also import Layout from Layout.jsx
import Layout from './Layout.jsx'

//importing (children)components
//we can also create the index file and add all the components in it and then export the index file
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
//the below is the good practice that if we are getting a component & method from the same file then we should import them in one line only
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


//This createBrowserRouter is a method which takes an array that comes from react-router
//TO CREATE THE ROUTER WE HAVE 2 APPROACHES:
//AP: 1)
{/*This '/' in the path is a top level element in which the routing gets done. Nesting is getting inside it*/}
// we are also adding more children like Home, About etc. We have to also import all these components(children)
/*const router = createBrowserRouter([
  {   //this is a object in which we have the main path
    path: '/', 
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      }, 
      {
        path: 'about',
        element: <About/>
      }, 
      {
        path: 'contact',
        element: <Contact/>
      }, 
      {

      }
    ]
  }
])*/

//AP: 2)
//another way for the above code(this syntax is more readable)
//FOR THIS WE HAVE TO IMPORT 'ROUTE'
//createRoutesFromElements is a method there is also createRoutesFromChildren
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>  {/*We can call this Layout, Root also */}
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>  {/*WE CAN ALSO NEST THIS 'ABOUT' SEE THE BELOW *** MARKED LINE FOR THIS*/}
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>  {/* LOADER */}
      <Route path='user/:userid' element={<User/>}/>  {/*userid is a parameter. The value that we are writing after : is important, not it down */}
    </Route>
  )  
)

{/*
<Route path='about' element={<About/>}>
    <Route path='hitesh'/>  
</Route> */}
{/*NOW THE URL 'll BE: /about/hitesh. The another / 'll add automatically */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* To create the router we wrote the below line. The RouterProvider is like a wrapper in which we have wrapped all the (above)things */}
    <RouterProvider router={router}/>   {/*in the curly braces we are taking that above created router */}
  </React.StrictMode>,
)
