
// all component names are Capitalize format
import Chai from './Chai'   //we are importing the 'chai' component from the 'chai.jsx' file to this 'App.jsx' file

function App() {

  const username = 'chai aur code'

  return (
    //This below is called Fragment. We can return only one element in jsx, but if we want to return multiple elements than we can insert them into a single element(which is here we used it )
    <>
      <Chai/>
      <h1>chai aur react {username}</h1>  {/*the code in the curly braces is called evaluated expression bcoz we can't write the full js inside it we can just write the js expression*/}
      <p>test para</p>
    </>
  )
}

export default App
