import { createSlice } from "@reduxjs/toolkit";

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


export const cartAction = cartSlice.actions;
export default cartSlice.reducer;