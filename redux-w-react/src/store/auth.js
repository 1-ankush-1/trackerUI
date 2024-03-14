import { createSlice } from "@reduxjs/toolkit";

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

export const authAction = authSlice.actions;
export default authSlice.reducer;