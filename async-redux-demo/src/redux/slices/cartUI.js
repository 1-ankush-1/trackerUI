import { createSlice } from "@reduxjs/toolkit";

const cartUISLice = createSlice({
    name: "cartUI",
    initialState: { isHidden: false, notification: null },
    reducers: {
        toggle: (state) => {
            state.isHidden = !state.isHidden;
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
        }
    }
})


export const cartUIAction = cartUISLice.actions;
export default cartUISLice.reducer;