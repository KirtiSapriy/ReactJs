import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CounterSlice from '../Slice/counterSlice'

export const Store = configureStore({
    reducer: {
        counterReducer: CounterSlice
    }
})

