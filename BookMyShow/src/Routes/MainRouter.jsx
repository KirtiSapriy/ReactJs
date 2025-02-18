import { Home } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import AddProducts from '../Pages/AddProducts'


function MainRouter({ Search }) {
        return (
                <Routes>
                        <Route path='/' element={<HomePage Search={Search}></HomePage>} ></Route>
                        <Route path='/addProducts' element={<AddProducts />} ></Route>
                        <Route path='/addProducts/:Id' element={<AddProducts />} ></Route>
                </Routes>


        )
}

export default MainRouter
