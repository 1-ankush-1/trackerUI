import { createSlice } from "@reduxjs/toolkit";
import { cartUIAction } from "./cartUI";

const cartInitialState = { items: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        add: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((itemExist) => itemExist.id === item.id);
            if (!existingItem) {
                state.items.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    quantity: 1,
                });
            } else {
                existingItem.quantity += 1;
            }
            state.totalQuantity += 1;
            state.totalPrice += item.price;
        },
        remove: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(itemExist => itemExist.id === id);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== id);
            }
            state.totalQuantity -= 1;
            state.totalPrice -= existingItem.price;
        }
    }
})

//action creator - not return the action instead return a function that return a action
export function sendCartData(cartData) {

    //perform aschronous code here
    return async (dispatch) => {
        //perform actual action
        dispatch(cartUIAction.showNotification({
            status: "pending",
            title: "sending..",
            message: "Sending cart data"
        }))

        const sendRequest = async () => {
            const response = await fetch("https://async-react-add96-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
                method: "PUT",
                body: JSON.stringify(cartData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error("setting cart data failed ")
            }
        }

        try {
            await sendRequest();
            dispatch(cartUIAction.showNotification({
                status: "success",
                title: "Success",
                message: "Set cart data successfully "
            }))
        } catch (error) {
            dispatch(cartUIAction.showNotification({
                status: "error",
                title: "Error",
                message: "setting cart data failed "
            }))
        }
    }
}

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;