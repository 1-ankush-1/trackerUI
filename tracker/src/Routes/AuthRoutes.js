import { Route, Routes } from "react-router-dom";
import Login from "../Pages/AuthPages/Login";
import SignUp from "../Pages/AuthPages/SignUp";
import Forget from "../Pages/AuthPages/Forget";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default AuthRoutes;