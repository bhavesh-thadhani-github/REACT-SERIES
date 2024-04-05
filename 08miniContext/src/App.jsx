import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    //instead of exporting & writing UserContextProvider, we can write it here also just like we have written in the UserContextProvider file.
    //<UserContext.Provider value={{}}>

    //now we have to import the components & how these components 'll access the data, we have handled in the component only.
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
