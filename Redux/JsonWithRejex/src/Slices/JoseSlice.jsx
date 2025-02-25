import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const ApiLink = 'http://localhost:5000/products'

export const AddData = createAsyncThunk("AddData", async (addData) => {
    const res = await axios.post(ApiLink, addData)
    return res.data
})
export const GetData = createAsyncThunk("GetData", async () => {
    let res = await axios.get(ApiLink)
    return res.data

})
export const DeleteData = createAsyncThunk("DeleteData", async (id) => {
    await axios.delete(`${ApiLink}/${id} `)
    return id

})
export const EditData = createAsyncThunk("EditData", async (data) => {
    console.log(data.id);
    await axios.put(`${ApiLink}/${data.id}`, data)
    return data
})

export const JoseSlice = createSlice({
    name: "JoseSlice",
    initialState: { isForm: true, loading: true, products: [], error: null, id: null },
    reducers: {
        setForm: (state, action) => {
            state.isForm = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addCase(GetData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(GetData.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(AddData.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        builder.addCase(DeleteData.fulfilled, (state, action) => {
            state.products = state.products.filter((el) => el.id != action.payload)

        })
        builder.addCase(EditData.fulfilled, (state, action) => {
            state.products.map((el) => el.id == action.payload.id ? el = action.payload : el)
        })
    })
})

export const { setForm, setId } = JoseSlice.actions
export default JoseSlice.reducer