import React from 'react'
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'
import User from './pages/User/User'
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* landing page route */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/profile' element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

