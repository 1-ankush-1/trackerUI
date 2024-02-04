import React from 'react'


//create context which return a object that contain component
const AuthContext = React.createContext({
    isLoggedIn: false,
    //for autocompletion suggestion
    onLogout: () => {}
})

export default AuthContext;