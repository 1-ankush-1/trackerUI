const CartReducer = (state, action) => {
    let updatedTotalAmount;
    let existingCartItemIndex;
    let existingCartItem;
    let updatedItems;
    
    switch (action.type) {
        case "ADD_ITEM":
            //update total
            updatedTotalAmount = Number(state.totalAmount) + Number(action.item.price) * Number(action.item.amount);
            //find the item idx
            existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];
            if (existingCartItem) {
                //increase the amount that item
                const updatedItem = { ...existingCartItem, amount: Number(existingCartItem.amount) + Number(action.item.amount) };
                //add updated item in items 
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                //add new item
                updatedItems = state.items.concat(action.item);
            }

            return { items: updatedItems, totalAmount: updatedTotalAmount };

        case "REMOVE_ITEM":
            //find the item idx
            existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                //last item remove item from array
                if (existingCartItem.amount === 1) {
                    updatedItems = state.items.filter(item => item.id !== action.id);
                } else {
                    //decrease the amount that item
                    const updatedItem = { ...existingCartItem, amount: Number(existingCartItem.amount) - 1 };
                    //add updated item in items 
                    updatedItems = [...state.items];
                    updatedItems[existingCartItemIndex] = updatedItem;
                }

                //update totalamount
                updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.amount), 0);
                return { items: updatedItems, totalAmount: updatedTotalAmount };
            }
            return state
        default:
            return state;
    }
}

export default CartReducer;