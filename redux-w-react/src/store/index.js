import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";


const initialState = { counter: 0 }

createSlice({
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

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENTBY2":
            return {
                counter: state.counter + 2
            }
        case "DECREMENTBY2":
            return {
                counter: state.counter - 2
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;