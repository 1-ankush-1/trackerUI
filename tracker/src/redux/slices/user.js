import { createSlice } from "@reduxjs/toolkit";
import userServices from "../../Services/userServices";

const initialUserState = {
    user: {
        id: "",
        name: "",
        email: "",
        image: "",
    },
    isUpdated: false
}

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        update: async (state, action) => {
            const response = await userServices.put(action.payload.user);
            // console.log(response);
            if (response.data.status) {
                state.user = { ...state.user, ...action.payload.user };
                state.isUpdated = true
            }
        }
    }
})

export const userAction = userSlice.actions;
export default userSlice.reducer;