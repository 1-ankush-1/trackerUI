import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { AuthContext } from "../Store/authStore";
import { useContext } from "react";

const Router = () => {
    const authCtx = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/auth/*" element={!authCtx.isLoggedIn ? <AuthRoutes /> : <Navigate to="/" replace />} />
            <Route path="/*" element={authCtx.isLoggedIn ? <UserRoutes /> : <Navigate to="/auth/login" replace />} />
        </Routes>
    )
}

export default Router;