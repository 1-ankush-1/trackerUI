import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increment(state, action) {
            state.counter = state.counter + action.amount;      //increment by value
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterAction = counterSlice.actions;

export default store;