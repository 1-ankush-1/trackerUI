import { createSlice } from "@reduxjs/toolkit";

const initiaCounterlState = { counter: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState: initiaCounterlState,
    reducers: {
        increment(state) {
            console.log(state.counter);
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementByValue(state, action) {
            state.counter = state.counter + action.payload;      //increment by value
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;