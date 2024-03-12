import { Route, Routes } from "react-router-dom";
import Login from "../Pages/AuthPages/Login";
import SignUp from "../Pages/AuthPages/SignUp";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default AuthRoutes;