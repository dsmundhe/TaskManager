import React from 'react'
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'
import User from './pages/User/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

