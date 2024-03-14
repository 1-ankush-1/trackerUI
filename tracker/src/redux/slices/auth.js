import { createSlice } from "@reduxjs/toolkit";
import authService from "../../Services/authServices";

const initialAuthState = { token: "", isAuthenticated: false }

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            const response = undefined
            // const response = await authService.login({ email: action.payload.email, password: action.payload.password });
            if (response) {
                state.token = response.data.token;
                state.isAuthenticated = true;
                localStorage.setItem("token", response.data.token);
            } 
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.token = null;
            state.isAuthenticated = false;
        },
        reset: async (state, action) => {
            await authService.reset(action.payload.email);
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;