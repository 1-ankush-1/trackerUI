import authService from "../../Services/authServices";
import { authAction } from "../slices/auth";

export function loginUser(user) {
    return async (dispatch) => {
        const response = await authService.login({ email: user.email, password: user.password });
        if (response.data) {
            localStorage.setItem("token", response.data.token)
            dispatch(authAction.login({ token: response.data.token, isAuthenticated: true }));
            alert("login");
        }
    }
}
export function ForgetUser(user) {
    return async () => {
        const response = await authService.reset(user.email);
        alert(response.data.message);
    }
}