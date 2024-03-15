import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { isDark: true };
const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        changeMode: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const themeAction = themeSlice.actions;
export default themeSlice.reducer;