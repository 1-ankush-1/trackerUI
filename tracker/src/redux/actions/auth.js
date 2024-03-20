import authService from "../../Services/authServices";
import { authAction } from "../slices/auth";
import { notificationAction } from "../slices/notification";

export function loginUser(user) {
    return async (dispatch) => {
        dispatch(notificationAction.showNotification({
            status: "pending",
            title: "sending..",
            message: "Logging in user"
        }))

        try {
            const response = await authService.login({ email: user.email, password: user.password });
            if (response.data) {
                localStorage.setItem("token", response.data.token)
                dispatch(authAction.login({ token: response.data.token, isAuthenticated: true }));
                dispatch(notificationAction.showNotification({
                    status: "success",
                    title: "Success",
                    message: "User Successfully logged in"
                }))
            }
        } catch (error) {
            dispatch(notificationAction.showNotification({
                status: "error",
                title: "Error",
                message: "failed to authenticate user"
            }))
        }
    }
}
export function ForgetUser(user) {
    return async () => {
        const response = await authService.reset(user.email);
        alert(response.data.message);
    }
}