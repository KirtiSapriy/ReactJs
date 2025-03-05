import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const link = `http://localhost:5000/user`

export const getItems = createAsyncThunk("getItems", async () => {
    const api = await axios.get(link)
    return api.data
})
export const postData = createAsyncThunk("postData", async (newData) => {
    const api = await axios.post(link, newData)
    return api.data
})
export const deleteData = createAsyncThunk("deleteData", async (id) => {
    await axios.delete(`${link}/${id}`);
    return id;
})
export const editData = createAsyncThunk("editData", async ({ id, newData }) => {
    const response = await axios.put(`${link}/${id}`, newData);
    return response.data;
});

export const JsonPost = createSlice({
    name: "JsonPost",
    initialState: { loading: true, error: null, data: [] },
    reducers: {},
    extraReducers: (bulider => {
        bulider.addCase(getItems.pending, (state, action) => {
            state.loading = true;
        }).addCase(getItems.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        }).addCase(getItems.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        bulider.addCase(postData.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        bulider.addCase(deleteData.fulfilled, (state, action) => {
            state.data = state.data.filter((el) => el.id !== action.payload);
        })
        bulider.addCase(editData.fulfilled, (state, action) => {
            state.data = state.data.map((el) =>
                el.id === action.payload.id ? action.payload : el
            );
        })
    })
})
export default JsonPost.reducer
