import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", title: "", message: "" };

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        showNotification(state, action) {
            state.status = action.payload.status
            state.title = action.payload.title
            state.message = action.payload.message
        },
        clearNotification(state) {
            state.status = ""
            state.title = ""
            state.message = ""
        }
    }
})


export const notificationAction = notificationSlice.actions;
export default notificationSlice.reducer;