import { createSlice } from "@reduxjs/toolkit";

const cartUISLice = createSlice({
    name: "cartUI",
    initialState: { isHidden: false },
    reducers: {
        toggle: (state) => {
            state.isHidden = !state.isHidden;
        }
    }
})


export const cartUIAction = cartUISLice.actions;
export default cartUISLice.reducer;