import cartReducer from "./cart"
import cartUIReducer from "./cartUI"

const rootReducer = {
    cart: cartReducer,
    cartUI: cartUIReducer
}

export default rootReducer;