import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth' 
import { login, logout } from './store/authSlice'
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'


//MAJOR WORK WILL GET DONE FROM THIS(APP.JSX) FILE ONLY
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()  //we have to send the dispatch also, that bring current user or do something(change the state we want dispatch).

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {//if the prc.s is successfull(the data is fetched successfully), userData is a var
      if(userData){
        //we have to dispatch the userData so that we get the userData in the action (can skip the userData after payload)
        dispatch(login({userData})) //direct object passed(we can also give another name to the object instead of userData)
      }else {
        dispatch(logout())  //we have tried to take data from the user(getCurrentUser), if we do not get the data then call an activity(logout) so that our state gets updated(that the user is not login, so our state always remain updated.)
      }
    })   
    .finally(() => setLoading(false)) //so that the loading gets stopped
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null) //we are checking in reverse here, if the loading is true then null value(we can also show loading statement)
}

export default App



// ROUGH:
// NO NEED
  // console.log(process.env.REACT_APP_APPWRITE_URL);  //we get error, see .env file for more info.
  // console.log(import.meta.env.VITE_APPWRITE_URL);

// NOTES:
// we have to see that the user is loged in or not when the app gets loaded, we 'll see this from the state
// if the user is logged in then we 'll show him some things & if not then we show that any outlet(msg) like 'NO POSTS'
//first we 'll create a state called loading, bcoz when we fetch the data from the application,appwrite(there can be a delay in network request) so in this case we want to ask from the db or net. then it's good to create a loading state, then on it's basis we can do conditional rendering that if loading is true then we 'll show loading icon & if not then show Data.
//Now (after creating dispatch), when the application gets loaded then take a useEffect & ask from that useEffect that the user is logged in or not