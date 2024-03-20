import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = { token: "", isAuthenticated: false }

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;