import React from 'react'
import ReactDOM from 'react-dom/client'
import "@/App.css"
import AuthRoute from './router/config/AuthRoute'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AuthRoute></AuthRoute>
  </Provider>
)
