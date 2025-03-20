import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Firebase/SignUp'
import Signin from './Firebase/Signin'
import Deshborad from './Firebase/Deshborad'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/deshborad" element={<Deshborad />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
