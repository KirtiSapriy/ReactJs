import { configureStore } from '@reduxjs/toolkit'
import ApiSlice from '../Slices/ApiSlice'
import JsonPost  from '../Slices/JSonPost'

export const Store = configureStore({
    reducer: {
        ApiReduces: ApiSlice,
        Json: JsonPost
    }
})


