import { configureStore } from "@reduxjs/toolkit";
import Curdslice from "../Curdslice/Curdslice";

export const Store = configureStore({
    reducer: {
        CURD: Curdslice,
    }
}) 