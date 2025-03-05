import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const CounterSlice =
    createSlice({
        name: "COUNTER",
        initialState: { count: 0 },
        reducers: {
            Inc: (state) => {
                state.count += 1
            },
            Dec: (state, action) => {
                if (state.count != 0) {
                    state.count -= 1
                }
            },
            Reset: (state) => {

                state.count = 0
            }
        }
    })



export const { Inc, Dec, Reset } = CounterSlice.actions
export default CounterSlice.reducer