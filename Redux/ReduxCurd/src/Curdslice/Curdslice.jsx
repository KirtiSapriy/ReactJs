import { createSelector, createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const Curdslice = createSlice(
    {
        name: "Curdslice",
        initialState: { todoData: [] },
        reducers: {
            AddData: (state, action) => {
                state.todoData.push(action.payload);

            },
            DeleteData: (state, action) => {
                state.todoData = state.todoData.filter((el) => el.id != action.payload)

            },
            upData: (state, action) => {
                let getData = action.payload

                let data = state.todoData.find((el) => el.id == getData.index)

                data.inData = getData.inData




            },
        }

    })

export const { AddData, DeleteData, upData } = Curdslice.actions
export default Curdslice.reducer

