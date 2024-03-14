import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initiaAuthState = { isAuthenticated: false }
const authSlice = createSlice({
    name: "auth",
    initialState: initiaAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const authAction = authSlice.actions;
export const counterAction = counterSlice.actions;
export default store;