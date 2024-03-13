import React, { useEffect, useState } from "react";
import authService from "../Services/authServices";

export const AuthContext = React.createContext({
    token: "",
    isLoggedIn: "",
    onLogin: () => { },
    onLogout: () => { },
    onReset: () => { }
})

const AuthContextProvider = (props) => {
    const initialState = localStorage.getItem("token");
    const [token, setToken] = useState(initialState);
    const UserIsLoggedIn = !!token

    const handleAddToken = async (user) => {
        const response = await authService.login({ email: user.email, password: user.password });
        if (response.data) {
            localStorage.setItem("token", response.data.token)
            setToken(response.data.token);
            alert("Login successful");
        }
    }

    const handleResetToken = async (email) => {
        const response = await authService.reset(email);
        alert(response.data.message);
    }

    const handleRemoveToken = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    //autolog out after 1 hour
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleRemoveToken();
        }, 60 * 60 * 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [token]);

    const values = {
        isLoggedIn: UserIsLoggedIn,
        onLogin: handleAddToken,
        onLogout: handleRemoveToken,
        onReset: handleResetToken
    }

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;