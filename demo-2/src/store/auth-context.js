import React, { useEffect, useState } from 'react'

//create context which return a object that contain component
export const AuthContext = React.createContext({
    isLoggedIn: false,
    //for autocompletion suggestion
    onLogout: () => { },
    onLogin: ((email, password) => { })
})

//clean code - move logic from app to seprate file
const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "1") {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn", "0");
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    > {props.children}</AuthContext.Provider >
}

export default AuthContextProvider;