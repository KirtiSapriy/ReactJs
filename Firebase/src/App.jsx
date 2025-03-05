import React from 'react'
import Signup from './Firebase/Signup'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import SignIn from './Firebase/SignIn'
import Dashboard from './Firebase/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
