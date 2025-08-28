import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContectProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with shubhi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
