import React, { useReducer } from "react";
import CartReducer from "../reducers/cartReducer";

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, {
        items: [],
        totalAmount: 0
    });

    const addItemInCart = (item) => {
        dispatchCartAction({ action: "ADD_ITEM", item })
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ action: "REMOVE_ITEM", id })
    }

    const value = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemInCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;