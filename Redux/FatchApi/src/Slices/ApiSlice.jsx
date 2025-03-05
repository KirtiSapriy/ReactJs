import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

export const Api = createAsyncThunk("Api", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products")
        return response.data.products // Fix: Correctly return products
    } catch (error) {
        throw error // Fix: Proper error handling
    }

})

export const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: { data: [], loding: true, error: null },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(Api.pending, (state) => {
            state.loding = true  // Fixed spelling
        })
            .addCase(Api.fulfilled, (state, action) => {
                state.loding = false
                state.data = action.payload
            })
            .addCase(Api.rejected, (state, action) => {
                state.loding = false
                state.error = action.error.message
            })

    })
})

export default ApiSlice.reducer

