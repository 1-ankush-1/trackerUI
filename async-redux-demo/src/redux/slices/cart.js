import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0, totalPrice: 0, changed:false }; //added changed to monitor and donot call put request on inital call

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        replaceCart:(state,action)=>{
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity
            state.totalPrice = action.payload.totalPrice
        },
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
            state.changed = true;
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
            state.changed = true;   //only change on any update happen on user action
            state.totalQuantity -= 1;
            state.totalPrice -= existingItem.price;
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;