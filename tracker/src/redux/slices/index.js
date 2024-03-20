import authReducer from "./auth"
import userReducer from "./user"
import expenseReducer from "./expense"
import themeReducer from "./theme"
import notificationReducer from "./notification"

const rootReducer = {
    theme: themeReducer,
    auth: authReducer,
    user: userReducer,
    expense: expenseReducer,
    notification: notificationReducer
}

export default rootReducer;