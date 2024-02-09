import React, { useReducer } from "react"

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

const cardReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const updatedItem = state.items.concat(action.item);
            const updatedTotalAmount = Number(state.totalAmount) + (Number(action.item.price) * Number(action.item.amount));
            return { items: updatedItem, totalAmount: updatedTotalAmount };
        case "REMOVE_ITEM":
            break;
        default:
            return state
    }
}

const CartContextProvider = (props) => {

    const [cardState, dispatchCartAction] = useReducer(cardReducer, {
        items: [],
        totalAmount: 0
    })

    const addItem = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item: item });
    }

    const removeItem = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: { id } });
    }

    const values = {
        items: cardState.items,
        totalAmount: cardState.totalAmount,
        addItem: addItem,
        removeItem: removeItem
    }

    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;