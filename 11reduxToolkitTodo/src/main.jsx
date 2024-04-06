import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './app/store'

//NOTES:

// instead of writing value with the provider as we written in contextAPI, we have to write store that we have created, in the redux-toolkit

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
