import authReducer from "./auth"
import userReducer from "./user"
import expenseReducer from "./expense"
import themeReducer from "./theme"

const rootReducer = {
    theme: themeReducer,
    auth: authReducer,
    user: userReducer,
    expense: expenseReducer
}

export default rootReducer;