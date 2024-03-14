import authReducer from "./auth"
import userReducer from "./user"
import expenseReducer from "./expense"

const rootReducer = {
    auth: authReducer,
    user: userReducer,
    expense: expenseReducer
}

export default rootReducer;