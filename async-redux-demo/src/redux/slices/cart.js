import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {

    }
})


export const cartAction = cartSlice.actions;
export default cartSlice.reducer;